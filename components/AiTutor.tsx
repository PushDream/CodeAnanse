
import React, { useRef, useEffect } from 'react';
import type { Message } from '../types';
import { InteractionType } from '../types';
import { SparklesIcon, LightbulbIcon, QuestionIcon, CheckCircleIcon } from './Icons';

interface AiTutorProps {
  messages: Message[];
  isLoading: boolean;
  onInteraction: (type: InteractionType) => void;
}

const AiTutor: React.FC<AiTutorProps> = ({ messages, isLoading, onInteraction }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  // A simple markdown to HTML converter for bold and code blocks
  const renderMessageContent = (content: string) => {
    // Escape HTML to prevent XSS
    const escapedContent = content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const formattedContent = escapedContent
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-purple-300">$1</strong>') // Bold
      .replace(/```(javascript|typescript|js|ts|python)?\n([\s\S]*?)```/g, '<pre class="bg-[#0f0f1b] p-3 rounded-md my-2 overflow-x-auto"><code class="font-mono text-sm text-cyan-300">$2</code></pre>') // Code blocks
      .replace(/`(.*?)`/g, '<code class="bg-[#2a2a4a] px-1.5 py-0.5 rounded-md font-mono text-sm text-pink-400">$1</code>'); // Inline code
    
    return <div dangerouslySetInnerHTML={{ __html: formattedContent.replace(/\n/g, '<br />') }} />;
  };

  return (
    <div className="bg-[#1a1a2e]/80 rounded-lg border border-purple-500/20 p-4 flex flex-col h-full backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-4 px-2">
        <SparklesIcon />
        <h3 className="text-lg font-semibold text-gray-100">AI Tutor</h3>
      </div>
      <div className="flex-grow bg-[#0f0f1b]/70 rounded-md p-4 overflow-y-auto mb-4">
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 mt-1"/>}
              <div className={`max-w-md text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600/80 text-white rounded-lg p-3' : 'text-gray-300'}`}>
                {renderMessageContent(msg.content)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 animate-pulse mt-1"/>
              <div className="text-gray-400 italic">Weaving a response...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <TutorButton icon={<LightbulbIcon/>} label="Hint" onClick={() => onInteraction(InteractionType.Hint)} disabled={isLoading} />
        <TutorButton icon={<QuestionIcon/>} label="Explain" onClick={() => onInteraction(InteractionType.Explain)} disabled={isLoading} />
        <TutorButton icon={<CheckCircleIcon/>} label="Review" onClick={() => onInteraction(InteractionType.Review)} disabled={isLoading} />
      </div>
    </div>
  );
};

interface TutorButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    disabled: boolean;
}

const TutorButton: React.FC<TutorButtonProps> = ({ icon, label, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center gap-2 bg-[#2a2a4a] border border-purple-500/30 rounded-lg p-3 text-sm font-semibold hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
    >
      {icon}
      <span>{label}</span>
    </button>
)

export { AiTutor };
