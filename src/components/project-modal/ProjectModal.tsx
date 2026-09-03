import { useEffect } from 'react';
import { projects } from '../../data/projects';
import styles from './ProjectModal.module.css';

type ProjectModalProps = {
  slug: string | null;
  onClose: () => void;
};

export default function ProjectModal({ slug, onClose }: ProjectModalProps) {
  const project = projects.find((item) => item.slug === slug) ?? null;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className={styles.dim} onClick={onClose}>
      <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
        <button type="button" className={styles.close} onClick={onClose} aria-label="닫기">
          ✕
        </button>

        <div className={styles.thumbnail}>
          {project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} />
          ) : (
            <span>이미지 준비중</span>
          )}
        </div>

        <div className={styles.body}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.meta}>
            {project.period} · {project.team}
          </p>
          {project.stack.length > 0 && (
            <div className={styles.tags}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          )}
          <p className={styles.summary}>{project.overview}</p>

          {project.links.length > 0 && (
            <div className={styles.links}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.linkButton}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
