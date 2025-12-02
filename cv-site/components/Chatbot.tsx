import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, Key } from 'lucide-react';
import { ChatMessage } from '../types';
import { chatWithPortfolio } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hello! I am Oğuzhan's AI Assistant. You can ask me anything about my projects, data science skills, or engineering background.",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setHasError(false);

    try {
        const historyForApi = messages.map(m => ({role: m.role, text: m.text}));
        const responseText = await chatWithPortfolio(userMsg.text, historyForApi);
        
        const botMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText || "I'm focusing on thinking but couldn't generate a response. Please try again.",
            timestamp: new Date()
        };
        setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      setHasError(true);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "An error occurred connecting to the AI service. Please ensure the API Key is configured in environment variables.",
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex flex-col h-[500px] bg-charcoal/30 border border-gray-700 rounded-xl overflow-hidden">
      
      {/* Header */}
      <div className="bg-charcoal p-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-electric-green animate-pulse"></div>
          <span className="font-bold text-white flex items-center gap-2">
             <Bot size={18} className="text-neon-blue"/> Oğuzhan AI Assistant
          </span>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          Powered by Gemini
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0f172a]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-neon-blue text-deep-navy rounded-tr-none font-medium'
                  : msg.isError 
                    ? 'bg-red-900/50 border border-red-500 text-red-200 rounded-tl-none'
                    : 'bg-charcoal text-gray-200 border border-gray-700 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-charcoal border border-gray-700 rounded-2xl rounded-tl-none p-3 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-neon-blue" />
              <span className="text-xs text-gray-400">Thinking...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-charcoal border-t border-gray-700">
        {!process.env.API_KEY && !hasError && (
             <div className="text-xs text-yellow-500 mb-2 flex items-center gap-1">
                 <Key size={12}/> API Key required in environment for full functionality.
             </div>
        )}
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about my XGBoost experience..."
            className="w-full bg-deep-navy border border-gray-600 rounded-xl py-3 pl-4 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 p-1.5 bg-neon-blue text-deep-navy rounded-lg hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
