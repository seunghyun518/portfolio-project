export type CareerType = 'intern' | 'hackathon' | 'activity' | 'bootcamp' | 'education';

export type CareerItem = {
  title: string;
  period: string;
  description: string;
};

export type Career = {
  type: CareerType;
  name: string;
  logo: string;
  period: string;
  quote: string;
  roles: string[];
  awardScale: string;
  items: CareerItem[];
};

export const careers: Career[] = [
  {
    type: 'bootcamp',
    name: '현대오토에버 모빌리티 SW 스쿨',
    logo: '',
    period: '2026.07 – 2026.12',
    quote: '',
    roles: ['웹/앱 프론트엔드 과정'],
    awardScale: '',
    items: [
      {
        title: '웹/앱 개발 부트캠프 과정',
        period: '2026.07 – 2026.12',
        description:
          '현대오토에버 모빌리티 SW 스쿨 웹/앱 과정에 참여해 프론트엔드(React) 개발을 학습하고 있습니다.',
      },
    ],
  },
  {
    type: 'education',
    name: '상명대학교 서울캠퍼스',
    logo: '',
    period: '2020.03 – 2026.02',
    quote: '',
    roles: ['컴퓨터공학과'],
    awardScale: '',
    items: [
      {
        title: '컴퓨터공학과 졸업',
        period: '2026.02',
        description: '상명대학교 서울캠퍼스 컴퓨터공학과를 졸업했습니다.',
      },
    ],
  },
];
