import styles from './Skeleton.module.css';

const Skeleton = ({ type = 'card' }) => {
  return <div className={`${styles.skeleton} ${styles[type]}`}></div>;
};

export default Skeleton;
