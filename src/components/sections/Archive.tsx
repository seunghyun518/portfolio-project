import { archives } from '../../data/archives';
import { profile } from '../../data/profile';
import styles from './Archive.module.css';

export default function Archive() {
  const hasChannels = archives.channels.length > 0;
  const hasPosts = archives.posts.length > 0;
  const hasContact = Boolean(profile.resumeUrl);

  if (!hasChannels && !hasPosts && !hasContact) return null;

  return (
    <section id="archive" className={styles.archive}>
      <h2 className={styles.heading}>ARCHIVING</h2>

      {hasChannels && (
        <div className={styles.channels}>
          {archives.channels.map((channel) => (
            <a
              key={channel.url}
              href={channel.url}
              target="_blank"
              rel="noreferrer"
              className={styles.channelCard}
            >
              <p className={styles.channelName}>{channel.name}</p>
              <p className={styles.channelDescription}>{channel.description}</p>
              <p className={styles.channelMetric}>{channel.metric}</p>
            </a>
          ))}
        </div>
      )}

      {hasPosts && (
        <ul className={styles.postList}>
          {archives.posts.map((post) => (
            <li key={`${post.date}-${post.title}`} className={styles.post}>
              <span className={styles.postDate}>{post.date}</span>
              <span className={styles.postTitle}>{post.title}</span>
              <span className={styles.postSource}>{post.source}</span>
            </li>
          ))}
        </ul>
      )}

      {hasContact && (
        <div className={styles.contactBar}>
          {profile.resumeUrl && (
            <p className={styles.contactItem}>
              <b>이력서</b>
              <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                다운로드
              </a>
            </p>
          )}
        </div>
      )}

      <p className={styles.copyright}>
        © {new Date().getFullYear()}. {profile.name}. All rights reserved.
      </p>
    </section>
  );
}
