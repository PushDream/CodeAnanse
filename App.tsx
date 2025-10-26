import React, { useState, useCallback, useEffect } from 'react';
import { ProblemPanel } from './components/ProblemPanel';
import { CodeLoom } from './components/CodeLoom';
import { AiTutor } from './components/AiTutor';
import type { Message, Lesson } from './types';
import { InteractionType, Language } from './types';
import { processAiRequest } from './services/geminiService';
import { COURSES } from './constants';
import { WeaverLogo, PrevIcon, NextIcon } from './components/Icons';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>(Language.JavaScript);
  const [currentCourse, setCurrentCourse] = useState<Lesson[]>(COURSES[language]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  
  const currentLesson = currentCourse[currentLessonIndex];
  const currentProblem = currentLesson.problem;

  const [userCode, setUserCode] = useState<string>(currentProblem.starterCode);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: currentLesson.conceptExplanation }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Effect to handle language change
  useEffect(() => {
    const newCourse = COURSES[language];
    setCurrentCourse(newCourse);
    setCurrentLessonIndex(0);
    const firstLesson = newCourse[0];
    setUserCode(firstLesson.problem.starterCode);
    setMessages([{ role: 'model', content: firstLesson.conceptExplanation }]);
  }, [language]);
  
  // Effect to handle lesson change
  useEffect(() => {
    const newLesson = currentCourse[currentLessonIndex];
    setUserCode(newLesson.problem.starterCode);
    // Reset messages to show the concept for the new lesson, preserving chat history is a possible future improvement
    setMessages([{ role: 'model', content: newLesson.conceptExplanation }]);
  }, [currentLessonIndex, currentCourse]);


  const handleInteraction = useCallback(async (type: InteractionType) => {
    setIsLoading(true);
    let userMessage: Message | null = null;
    switch(type) {
      case InteractionType.Hint:
        userMessage = { role: 'user', content: 'Give me a hint.' };
        break;
      case InteractionType.Explain:
        userMessage = { role: 'user', content: 'Explain the concept or my code.' };
        break;
      case InteractionType.Review:
        userMessage = { role: 'user', content: 'Review my solution.' };
        break;
    }
    
    if (userMessage) {
        setMessages(prev => [...prev, userMessage as Message]);
    }

    try {
      const response = await processAiRequest(type, currentProblem, userCode, language);
      const aiMessage: Message = { role: 'model', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error with AI interaction:', error);
      const errorMessage: Message = { role: 'model', content: 'I seem to have a snag in my threads. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [currentProblem, userCode, language]);

  const handleNextLesson = () => {
    if (currentLessonIndex < currentCourse.length - 1) {
      setCurrentLessonIndex(prev => prev + 1);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#1b1b32] font-sans flex flex-col p-4 gap-4">
      <header className="flex items-center justify-between px-4 py-2 bg-[#1a1a2e]/50 rounded-lg border border-purple-500/20 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <WeaverLogo />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Code Weaver
          </h1>
        </div>
         <div className="flex items-center gap-4">
            <div className='flex items-center gap-2 text-sm'>
                <button onClick={handlePrevLesson} disabled={currentLessonIndex === 0} className="p-2 rounded-md hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><PrevIcon /></button>
                <span className='w-48 text-center tabular-nums'>{`Lesson ${currentLessonIndex + 1} of ${currentCourse.length}: ${currentLesson.title}`}</span>
                <button onClick={handleNextLesson} disabled={currentLessonIndex === currentCourse.length - 1} className="p-2 rounded-md hover:bg-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><NextIcon /></button>
            </div>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-[#2a2a4a] border border-purple-500/30 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all"
            >
                <option value={Language.JavaScript}>JavaScript</option>
                <option value={Language.Python}>Python</option>
            </select>
        </div>
      </header>
      <main className="flex-grow grid grid-cols-1 lg:grid-cols-12 gap-4 h-[calc(100vh-100px)]">
        <div className="lg:col-span-3 h-full">
          <ProblemPanel problem={currentProblem} />
        </div>
        <div className="lg:col-span-5 h-full flex flex-col">
          <CodeLoom code={userCode} setCode={setUserCode} />
        </div>
        <div className="lg:col-span-4 h-full">
          <AiTutor messages={messages} isLoading={isLoading} onInteraction={handleInteraction} />
        </div>
      </main>
    </div>
  );
};

export default App;