import styles from './ScrollTopButton.module.css';

export default function ScrollTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type="button" className={styles.button} onClick={handleClick} aria-label="맨 위로">
      ↑
    </button>
  );
}
