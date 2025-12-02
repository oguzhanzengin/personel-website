import React from 'react';
import { Project } from './types';
import { Database, Cloud, Code, Brain, Server, LineChart } from 'lucide-react';

export const RESUME_CONTEXT = `
You are the AI Assistant for Oğuzhan Zengin, an AI Architect, Data Scientist, and Industrial Engineer.
Your goal is to answer questions about his professional background, skills, and projects in a professional yet engaging manner.

## PROFILE SUMMARY
Oğuzhan Zengin is a professional bridging Industrial Engineering and Data Science. He focuses on "Measure, Model, Optimize".
He specializes in scalable cloud-based AI solutions and advanced machine learning.
Education: Galatasaray University (Master's), Istanbul Bilgi University.

## WORK EXPERIENCE

1. CLINECA HEALTH (Oct 2023 - Jan 2024)
- Role: Data Scientist / AI Engineer
- Developed behavior-learning and RAG-based AI agents using Llama 3, PyTorch, and OpenAI API, fine-tuned with historical chat data.
- Built automated, real-time lead collection systems for Instagram/Facebook using ManyChat and Chatbase.
- Designed data infrastructure on AWS (S3, Elastic Beanstalk) and MongoDB.
- Employed XGBoost and Random Forest Classifier to determine parameter importance and created individualized scores.

2. SIEMENS HEALTHINEERS (Oct 2020 - Jun 2021)
- Role: Project Intern (Supplier Optimization)
- Optimized supplier selection by implementing a comprehensive Multi-Criteria Decision Making (MCDM) mechanism in collaboration with Sales/Marketing.
- Converted subjective verbal expectations into objective numerical data to facilitate analysis and ranking.
- Analyzed procurement data to improve cost-efficiency.

## SKILLS
- Languages: Python, SQL.
- AI Frameworks: Llama 3, PyTorch, Hugging Face, OpenAI API, RAG.
- Cloud & DB: AWS (S3, EB), MongoDB, SQL.
- ML & Modeling: XGBoost, Random Forest, Scikit-learn.
- Engineering: Industrial Optimization, Process Analysis, MCDM.
- Soft Skills: Creative, Organized, Results-focused, Fast Learner, Team Player.

## CONTACT
- LinkedIn: https://www.linkedin.com/in/oğuzhan-zengin-87b33717b/
- GitHub: https://github.com/oguzhanzengin
- Email: zengin.oguzhann@gmail.com

Answer questions based on this context. Be concise and professional.
`;

export const PROJECTS: Project[] = [
  {
    id: 'clineca',
    title: 'AI Agent & Data Infrastructure',
    company: 'Clineca Health',
    role: 'Data Scientist',
    period: 'Oct 2023 - Jan 2024',
    category: 'Data Science',
    description: [
      'Developed behavior-learning and RAG-based AI agents using Llama 3, PyTorch, and OpenAI API, fine-tuned with historical chat data.',
      'Built automated, real-time lead collection systems for Instagram/Facebook using ManyChat and Chatbase.',
      'Employed XGBoost and Random Forest Classifier to determine parameter importance and created individualized scores.',
      'Deployed scalable data pipelines on AWS Elastic Beanstalk and S3.'
    ],
    techStack: ['Llama 3', 'PyTorch', 'AWS', 'ManyChat', 'XGBoost']
  },
  {
    id: 'siemens',
    title: 'Supplier Selection Optimization',
    company: 'Siemens Healthineers',
    role: 'Industrial Engineer Intern',
    period: 'Oct 2020 - Jun 2021',
    category: 'Engineering',
    description: [
      'Optimized supplier selection by implementing a comprehensive Multi-Criteria Decision Making (MCDM) mechanism in collaboration with Sales/Marketing.',
      'Converted subjective verbal expectations into objective numerical data to facilitate analysis and ranking.',
      'Analyzed procurement data to improve cost-efficiency.'
    ],
    techStack: ['MCDM', 'Data Analysis', 'Optimization', 'Excel']
  }
];

export const SKILLS = [
  { name: 'Python & Advanced Data Science', level: 90, icon: <Code size={20} /> },
  { name: 'AI Frameworks (Llama 3, PyTorch, HF)', level: 85, icon: <Brain size={20} /> },
  { name: 'Cloud & DB (AWS, MongoDB, SQL)', level: 80, icon: <Cloud size={20} /> },
  { name: 'ML & Statistical Modeling (XGBoost/RF)', level: 85, icon: <Server size={20} /> },
  { name: 'Industrial Optimization', level: 75, icon: <LineChart size={20} /> },
];

export const CONTACT_LINKS = {
  linkedin: 'https://www.linkedin.com/in/oğuzhan-zengin-87b33717b/',
  github: 'https://github.com/oguzhanzengin',
  email: 'zengin.oguzhann@gmail.com'
};