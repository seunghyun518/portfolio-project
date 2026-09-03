export type ProjectLink = {
  label: string;
  url: string;
};

export type TroubleShooting = {
  problem: string;
  cause: string;
  failedAttempt: string;
  solution: string;
  result: string;
};

export type Project = {
  slug: string;
  title: string;
  parts: string;
  thumbnail: string;
  featured: boolean;
  stack: string[];
  period: string;
  team: string;
  role: string;
  overview: string;
  retro: string;
  troubles: TroubleShooting[];
  links: ProjectLink[];
};

// TODO: 실제 프로젝트 정보로 교체하세요. 지금은 카드 UI 확인용 더미 데이터입니다.
export const projects: Project[] = [
  {
    slug: 'project-1',
    title: '프로젝트 1 (제목 준비중)',
    parts: 'Front-end',
    thumbnail: '',
    featured: true,
    stack: ['React', 'TypeScript'],
    period: '2026.00 – 2026.00',
    team: '팀 인원 미정',
    role: '담당 역할 작성 예정',
    overview: '프로젝트 개요를 작성해 주세요.',
    retro: '',
    troubles: [],
    links: [],
  },
  {
    slug: 'project-2',
    title: '프로젝트 2 (제목 준비중)',
    parts: 'Front-end',
    thumbnail: '',
    featured: true,
    stack: ['React', 'TypeScript'],
    period: '2026.00 – 2026.00',
    team: '팀 인원 미정',
    role: '담당 역할 작성 예정',
    overview: '프로젝트 개요를 작성해 주세요.',
    retro: '',
    troubles: [],
    links: [],
  },
];
