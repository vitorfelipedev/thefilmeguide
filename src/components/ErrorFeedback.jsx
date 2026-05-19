import styles from './ErrorFeedback.module.css';

const ErrorFeedback = ({ error }) => {
  return (
    <div className={styles.errorCard}>
      <div className={styles.icon}>⚠️</div>
      <h2>Ops! Algo deu errado.</h2>
      <p>{error || 'Não foi possível carregar as informações no momento.'}</p>
    </div>
  );
};

export default ErrorFeedback;
