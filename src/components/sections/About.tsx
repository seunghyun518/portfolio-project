import { profile } from '../../data/profile';
import styles from './About.module.css';

type InfoField = {
  label: string;
  value: string;
  href?: string;
};

export default function About() {
  const infoFields: InfoField[] = [
    { label: '이름', value: profile.name },
    { label: '생년월일', value: profile.birthdate },
    { label: '학력', value: profile.education },
    {
      label: '이메일',
      value: profile.email,
      href: profile.email ? `mailto:${profile.email}` : undefined,
    },
    { label: 'GitHub', value: profile.github, href: profile.github || undefined },
  ].filter((field) => field.value);

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.heading}>ABOUT ME</h2>
      <div className={styles.grid}>
        {profile.photo && (
          <img src={profile.photo} alt={profile.name} className={styles.photo} />
        )}
        <div className={styles.right}>
          <div className={styles.infoGrid}>
            {infoFields.map((field) => (
              <div key={field.label} className={styles.infoCard}>
                <p className={styles.infoLabel}>{field.label}</p>
                {field.href ? (
                  <a
                    href={field.href}
                    className={styles.infoValue}
                    target={field.href.startsWith('http') ? '_blank' : undefined}
                    rel={field.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {field.value}
                  </a>
                ) : (
                  <p className={styles.infoValue}>{field.value}</p>
                )}
              </div>
            ))}
          </div>
          {profile.about && <p className={styles.description}>{profile.about}</p>}
        </div>
      </div>
    </section>
  );
}
