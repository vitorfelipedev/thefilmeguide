import Skeleton from './Skeleton';
import styles from './MediaCardSkeleton.module.css';

const MediaCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <Skeleton type="card" />
      <div className={styles.tags}>
        <Skeleton type="tag" />
        <Skeleton type="tag" />
        <Skeleton type="tag" />
      </div>
      <Skeleton type="title" />
      <Skeleton type="rating" />
    </div>
  );
};

export default MediaCardSkeleton;
