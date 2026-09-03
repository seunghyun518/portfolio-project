export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  overview: string;
  description: string;
  period: string;
  stack: string[];
  links: ProjectLink[];
};

// TODO: 실제 프로젝트 정보로 교체하세요. 지금은 카드 UI 확인용 더미 데이터입니다.
export const projects: Project[] = [
  {
    slug: 'project-1',
    title: '프로젝트 1 (제목 준비중)',
    thumbnail: '',
    overview: '프로젝트 한 줄 소개를 작성해 주세요.',
    description: '프로젝트 상세 설명을 작성해 주세요. (배경, 목표, 진행 과정 등)',
    period: '2026.00 – 2026.00',
    stack: ['React', 'TypeScript'],
    links: [],
  },
  {
    slug: 'project-2',
    title: '프로젝트 2 (제목 준비중)',
    thumbnail: '',
    overview: '프로젝트 한 줄 소개를 작성해 주세요.',
    description: '프로젝트 상세 설명을 작성해 주세요. (배경, 목표, 진행 과정 등)',
    period: '2026.00 – 2026.00',
    stack: ['React', 'TypeScript'],
    links: [],
  },
];
