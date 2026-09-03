import { profile } from '../../data/profile';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {profile.tagline && <p className={styles.eyebrow}>{profile.tagline}</p>}
      <h1 className={styles.title}>
        <span className={styles.highlight}>{profile.name}</span>
        {profile.name ? '입니다.' : ''}
      </h1>
    </section>
  );
}
