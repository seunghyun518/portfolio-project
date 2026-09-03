export type SkillItem = {
  name: string;
  reason: string;
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
      { name: 'HTML', reason: '' },
      { name: 'CSS', reason: '' },
      { name: 'JavaScript', reason: '' },
      { name: 'React', reason: '' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Java', reason: '' },
      { name: 'Spring Boot', reason: '' },
    ],
  },
  {
    id: 'tool-infra',
    label: 'Tool / Infra',
    items: [
      { name: 'Docker', reason: '' },
      { name: 'AWS', reason: '' },
      { name: 'Redis', reason: '' },
      { name: 'Vercel', reason: '' },
    ],
  },
  { id: 'ai', label: 'AI 툴', items: [] },
];
