export interface Problem {
  title: string;
  description: string;
  goals: string[];
  starterCode: string;
}

export interface Lesson {
  title: string;
  conceptExplanation: string;
  problem: Problem;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export enum InteractionType {
  Hint = 'hint',
  Explain = 'explain',
  Review = 'review',
}

export enum Language {
    JavaScript = 'javascript',
    Python = 'python',
}