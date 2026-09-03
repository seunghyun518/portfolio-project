import { careers } from '../../data/careers';
import styles from './Career.module.css';

export default function Career() {
  if (careers.length === 0) return null;

  return (
    <section id="career" className={styles.career}>
      <h2 className={styles.heading}>CAREER</h2>
      <div className={styles.list}>
        {careers.map((career) => (
          <div key={`${career.name}-${career.period}`} className={styles.entry}>
            <div className={styles.logo}>{career.name}</div>
            <div className={styles.main}>
              <p className={styles.name}>{career.name}</p>
              <p className={styles.period}>{career.period}</p>
              <div className={styles.roles}>
                {career.roles.map((role) => (
                  <span key={role} className={styles.role}>
                    {role}
                  </span>
                ))}
              </div>
              {career.items.map((item) => (
                <div key={item.title} className={styles.item}>
                  <p className={styles.itemTitle}>{item.title}</p>
                  <p className={styles.itemPeriod}>{item.period}</p>
                  <p className={styles.itemDescription}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
