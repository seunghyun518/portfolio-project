import styles from './ProjectSideNav.module.css';

type ProjectSideNavItem = {
  id: string;
  label: string;
};

type ProjectSideNavProps = {
  title: string;
  items: ProjectSideNavItem[];
};

export default function ProjectSideNav({ title, items }: ProjectSideNavProps) {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={styles.nav}>
      <p className={styles.title}>{title}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <button type="button" className={styles.link} onClick={() => handleClick(item.id)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
