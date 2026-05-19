import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
import Head from '../helper/Head';

const NotFound = () => {
  return (
    <section className={`container ${styles.notFound}`}>
      <Head title={'Page not found | The Movie Guide'} />
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <h1>Page not found</h1>
        <p>It seems that this page has been discontinued or never existed.</p>
        <Link className={styles.button} to="/">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
