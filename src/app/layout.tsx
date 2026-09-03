import type { ReactNode } from 'react';
import Gnb from '../components/common/Gnb';
import './globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Gnb />
      {children}
    </>
  );
}
