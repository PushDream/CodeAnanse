
import React from 'react';
import type { Problem } from '../types';
import { TargetIcon, CheckIcon } from './Icons';

interface ProblemPanelProps {
  problem: Problem;
}

export const ProblemPanel: React.FC<ProblemPanelProps> = ({ problem }) => {
  return (
    <div className="bg-[#1a1a2e]/80 rounded-lg border border-purple-500/20 p-6 flex flex-col h-full backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">{problem.title}</h2>
      <div className="flex-grow overflow-y-auto pr-2">
        <p className="text-gray-300 leading-relaxed mb-6">{problem.description}</p>
        
        <div className="flex items-center gap-3 mb-4">
          <TargetIcon />
          <h3 className="text-lg font-semibold text-gray-100">Learning Goals</h3>
        </div>
        
        <ul className="space-y-3">
          {problem.goals.map((goal, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 pt-1 text-green-400">
                <CheckIcon />
              </div>
              <span className="text-gray-300 flex-1">{goal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
