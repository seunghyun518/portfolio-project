import { skills } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  const categories = skills.filter((category) => category.items.length > 0);

  if (categories.length === 0) return null;

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.heading}>SKILLS</h2>
      <div className={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.card}>
            <p className={styles.category}>
              {category.label}
              <span className={styles.count}>{category.items.length}</span>
            </p>
            <ul className={styles.list}>
              {category.items.map((item) => (
                <li key={item.name} className={styles.item}>
                  <span className={styles.name}>{item.name}</span>
                  {item.reason && <span className={styles.reason}>{item.reason}</span>}
                  <span className={styles.level}>{'★'.repeat(item.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
