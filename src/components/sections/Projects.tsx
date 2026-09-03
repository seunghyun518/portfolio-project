import { projects } from '../../data/projects';
import styles from './Projects.module.css';

type ProjectsProps = {
  onSelect: (slug: string) => void;
};

export default function Projects({ onSelect }: ProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.heading}>PROJECTS</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <button
            key={project.slug}
            type="button"
            className={styles.card}
            onClick={() => onSelect(project.slug)}
          >
            <div className={styles.thumbnail}>
              {project.thumbnail ? (
                <img src={project.thumbnail} alt={project.title} />
              ) : (
                <span>{project.title}</span>
              )}
            </div>
            <div className={styles.caption}>
              <p className={styles.title}>{project.title}</p>
              <p className={styles.overview}>{project.overview}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
