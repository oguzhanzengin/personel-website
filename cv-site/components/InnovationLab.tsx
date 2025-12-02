import React, { useState } from 'react';
import { MLPredictionInput, MLPredictionResult } from '../types';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, BrainCircuit, Play, Bot } from 'lucide-react';
import Chatbot from './Chatbot';

// Define Tab types locally or extend enum in types.ts
enum LabTab {
  DASHBOARD = 'DASHBOARD',
  ML_DEMO = 'ML_DEMO',
  CHATBOT = 'CHATBOT'
}

// Mock Data for Dashboard
const DASHBOARD_DATA = [
  { month: 'Jan', efficiency: 65, accuracy: 78 },
  { month: 'Feb', efficiency: 72, accuracy: 80 },
  { month: 'Mar', efficiency: 68, accuracy: 82 },
  { month: 'Apr', efficiency: 85, accuracy: 88 },
  { month: 'May', efficiency: 82, accuracy: 91 },
  { month: 'Jun', efficiency: 90, accuracy: 94 },
];

const InnovationLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<LabTab>(LabTab.CHATBOT); 
  
  // ML Demo State
  const [input, setInput] = useState<MLPredictionInput>({ age: 30, bmi: 24, glucose: 90, pressure: 120 });
  const [prediction, setPrediction] = useState<MLPredictionResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePredict = () => {
    setLoading(true);
    // Simulate API Latency
    setTimeout(() => {
      // Simple logistic regression simulation logic (just for demo purposes)
      const baseRisk = 10;
      const ageRisk = input.age * 0.5;
      const bmiRisk = (input.bmi - 20) * 1.5;
      const glucoseRisk = (input.glucose - 80) * 0.4;
      const pressureRisk = (input.pressure - 110) * 0.6;
      
      let score = baseRisk + ageRisk + bmiRisk + glucoseRisk + pressureRisk;
      score = Math.min(Math.max(score, 1), 99); // Clamp 1-99

      const riskLevel = score < 30 ? 'Low' : score < 60 ? 'Moderate' : 'High';
      
      setPrediction({
        riskScore: Math.round(score),
        riskLevel,
        confidence: 90 + Math.random() * 8 // Fake confidence
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="lab" className="py-20 bg-[#0b1120] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Innovation Lab</h2>
            <p className="text-gray-400">Interactive demos of Data Science & ML capabilities.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 p-1 bg-charcoal rounded-lg border border-gray-700">
            <button
              onClick={() => setActiveTab(LabTab.CHATBOT)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === LabTab.CHATBOT 
                ? 'bg-neon-blue text-deep-navy shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2"><Bot size={16}/> AI Assistant</span>
            </button>
            <button
              onClick={() => setActiveTab(LabTab.DASHBOARD)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === LabTab.DASHBOARD 
                ? 'bg-neon-blue text-deep-navy shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2"><Activity size={16}/> Pandas Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab(LabTab.ML_DEMO)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === LabTab.ML_DEMO 
                ? 'bg-electric-green text-deep-navy shadow-lg' 
                : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2"><BrainCircuit size={16}/> ML Model</span>
            </button>
          </div>
        </div>

        <div className="glass-panel border-gray-800 rounded-2xl p-6 md:p-10 min-h-[500px]">
          {activeTab === LabTab.CHATBOT && (
             <div className="animate-fadeIn max-w-4xl mx-auto">
               <div className="mb-6 text-center">
                 <h3 className="text-xl text-white font-mono mb-2">Custom Trained AI Assistant</h3>
                 <p className="text-gray-400 text-sm">
                   This chatbot is specifically configured with my CV and project data. 
                   You can live test my experience with Llama 3 architecture and RAG techniques.
                 </p>
               </div>
               <Chatbot />
             </div>
          )}

          {activeTab === LabTab.DASHBOARD && (
            <div className="animate-fadeIn">
              <h3 className="text-xl text-white font-mono mb-6">Production Efficiency vs Model Accuracy</h3>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={DASHBOARD_DATA}>
                    <defs>
                      <linearGradient id="colorEff" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAcc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="month" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="efficiency" stroke="#06b6d4" fillOpacity={1} fill="url(#colorEff)" name="Efficiency (%)" />
                    <Area type="monotone" dataKey="accuracy" stroke="#10b981" fillOpacity={1} fill="url(#colorAcc)" name="AI Accuracy (%)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-mono">
                * Visualization provided by Recharts, representing standard Pandas/NumPy analysis workflows.
              </p>
            </div>
          )}
          
          {activeTab === LabTab.ML_DEMO && (
            <div className="animate-fadeIn grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl text-white font-mono mb-6 flex items-center gap-2">
                  <BrainCircuit className="text-electric-green" />
                  Patient Risk Classifier (XGBoost Sim)
                </h3>
                <p className="text-gray-400 mb-8 text-sm">
                  This interface simulates a simplified XGBoost model trained on clinical data. 
                  Adjust parameters to see real-time inference results.
                </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Age</label>
                    <input 
                      type="range" min="18" max="90" 
                      value={input.age} 
                      onChange={(e) => setInput({...input, age: parseInt(e.target.value)})}
                      className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-neon-blue"
                    />
                    <div className="text-right text-neon-blue font-mono">{input.age}</div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-1">BMI</label>
                    <input 
                      type="range" min="15" max="45" 
                      value={input.bmi} 
                      onChange={(e) => setInput({...input, bmi: parseInt(e.target.value)})}
                      className="w-full h-2 bg-charcoal rounded-lg appearance-none cursor-pointer accent-neon-blue"
                    />
                    <div className="text-right text-neon-blue font-mono">{input.bmi}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Glucose (mg/dL)</label>
                      <input 
                        type="number" 
                        value={input.glucose} 
                        onChange={(e) => setInput({...input, glucose: parseInt(e.target.value)})}
                        className="w-full bg-charcoal border border-gray-600 text-white p-2 rounded focus:border-neon-blue focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Pressure (mmHg)</label>
                      <input 
                        type="number" 
                        value={input.pressure} 
                        onChange={(e) => setInput({...input, pressure: parseInt(e.target.value)})}
                        className="w-full bg-charcoal border border-gray-600 text-white p-2 rounded focus:border-neon-blue focus:outline-none"
                      />
                    </div>
                  </div>

                  <button 
                    onClick={handlePredict}
                    disabled={loading}
                    className="w-full mt-4 bg-electric-green text-deep-navy font-bold py-3 rounded hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? 'Processing...' : <><Play size={18} fill="currentColor"/> Predict Risk</>}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center bg-deep-navy/50 rounded-xl p-8 border border-charcoal">
                {prediction ? (
                  <div className="text-center animate-scaleIn">
                    <p className="text-gray-400 text-sm mb-2">PREDICTED RISK SCORE</p>
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-40 h-40 transform -rotate-90">
                        <circle cx="80" cy="80" r="70" stroke="#334155" strokeWidth="10" fill="transparent" />
                        <circle 
                          cx="80" cy="80" r="70" 
                          stroke={prediction.riskLevel === 'High' ? '#ef4444' : prediction.riskLevel === 'Moderate' ? '#f59e0b' : '#10b981'} 
                          strokeWidth="10" 
                          fill="transparent" 
                          strokeDasharray={440} 
                          strokeDashoffset={440 - (440 * prediction.riskScore) / 100}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <span className="absolute text-4xl font-bold text-white">{prediction.riskScore}</span>
                    </div>
                    <div className="mt-4">
                      <span className={`text-xl font-bold ${
                        prediction.riskLevel === 'High' ? 'text-red-500' : prediction.riskLevel === 'Moderate' ? 'text-amber-500' : 'text-emerald-500'
                      }`}>
                        {prediction.riskLevel === 'High' ? 'High' : prediction.riskLevel === 'Moderate' ? 'Moderate' : 'Low'} Risk
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Confidence: {prediction.confidence.toFixed(1)}%</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <BrainCircuit size={64} className="mx-auto mb-4 opacity-20" />
                    <p>Enter clinical parameters and run the model to see results.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;
