export type SkillLevel = 1 | 2 | 3;

export type SkillItem = {
  name: string;
  reason: string;
  level: SkillLevel;
};

export type SkillCategory = {
  id: 'frontend' | 'backend' | 'tool-infra' | 'ai';
  label: string;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'HTML', reason: '', level: 2 },
      { name: 'CSS', reason: '', level: 2 },
      { name: 'JavaScript', reason: '', level: 2 },
      { name: 'React', reason: '', level: 2 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Java', reason: '', level: 2 },
      { name: 'Spring Boot', reason: '', level: 2 },
    ],
  },
  {
    id: 'tool-infra',
    label: 'Tool / Infra',
    items: [
      { name: 'Docker', reason: '', level: 2 },
      { name: 'AWS', reason: '', level: 2 },
      { name: 'Redis', reason: '', level: 2 },
      { name: 'Vercel', reason: '', level: 2 },
    ],
  },
  { id: 'ai', label: 'AI 툴', items: [] },
];
