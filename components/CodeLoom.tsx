
import React from 'react';
import { CodeIcon } from './Icons';

interface CodeLoomProps {
  code: string;
  setCode: (code: string) => void;
}

export const CodeLoom: React.FC<CodeLoomProps> = ({ code, setCode }) => {
  return (
    <div className="bg-[#1a1a2e]/80 rounded-lg border border-purple-500/20 p-4 flex flex-col h-full backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4 px-2">
        <CodeIcon />
        <h3 className="text-lg font-semibold text-gray-100">Your Code Loom</h3>
      </div>
      <div className="flex-grow relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-[#0f0f1b] rounded-md p-4 font-mono text-sm text-cyan-300 border border-transparent focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/50 resize-none outline-none transition-all"
          placeholder="Weave your code here..."
          spellCheck="false"
        />
      </div>
    </div>
  );
};
