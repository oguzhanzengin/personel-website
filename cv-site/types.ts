export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  techStack: string[];
  category: 'Data Science' | 'Engineering' | 'Full Stack';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface MLPredictionInput {
  age: number;
  bmi: number;
  glucose: number;
  pressure: number;
}

export interface MLPredictionResult {
  riskScore: number; // 0 to 100
  riskLevel: 'Low' | 'Moderate' | 'High';
  confidence: number;
}

export enum TabType {
  DASHBOARD = 'DASHBOARD',
  ML_DEMO = 'ML_DEMO',
}