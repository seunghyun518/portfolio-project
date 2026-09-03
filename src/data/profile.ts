export type Profile = {
  name: string;
  tagline: string;
  summary: string;
  lastUpdate: string;
  photo: string;
  birthdate: string;
  location: string;
  education: string;
  about: string;
  email: string;
  github: string;
  resumeUrl: string;
};

export const profile: Profile = {
  name: '송승현',
  tagline: '멈추지 않는 백엔드 개발자',
  summary: '',
  lastUpdate: '2026-09-03',
  photo: '/images/profile.jpg',
  birthdate: '2001년생',
  location: '',
  education: '상명대학교 서울캠퍼스 컴퓨터공학과 (2026.02 졸업)',
  about:
    '2001년생으로 상명대학교 서울캠퍼스 컴퓨터공학과를 2026년 2월 졸업 예정입니다. Java와 Spring Boot를 중심으로 백엔드를 공부하고 있고, HTML/CSS/JavaScript/React로 프론트엔드도 함께 다루며 서비스를 처음부터 끝까지 만들어보는 경험을 쌓고 있습니다.',
  email: 'ssh12960@gmail.com',
  github: 'https://github.com/seunghyun518',
  resumeUrl: '',
};
