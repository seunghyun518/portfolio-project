import { archives } from '../../data/archives';
import { careers } from '../../data/careers';
import { profile } from '../../data/profile';
import ThemeSwitcher from './ThemeSwitcher';
import styles from './Gnb.module.css';

type NavItem = {
  label: string;
  href: string;
};

export default function Gnb() {
  const hasArchiveContent =
    archives.channels.length > 0 || archives.posts.length > 0 || Boolean(profile.resumeUrl);

  const navItems: NavItem[] = [
    { label: 'About me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    ...(careers.length > 0 ? [{ label: 'Career', href: '#career' }] : []),
    ...(hasArchiveContent ? [{ label: 'Archiving', href: '#archive' }] : []),
  ];

  return (
    <header className={styles.gnb}>
      <a href="#hero" className={styles.logo}>
        {profile.name ? `${profile.name}'s Portfolio` : 'Portfolio'}
      </a>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
      </nav>
      <ThemeSwitcher />
    </header>
  );
}
