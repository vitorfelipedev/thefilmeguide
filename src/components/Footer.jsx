import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.content}`}>
        <p>
          The Movie Guide &copy; {currentYear}. Data provided by{' '}
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            API do TMDB
          </a>
          .
        </p>
        <p>
          Devolepment by{' '}
          <a
            href="https://github.com/vitorfelipedev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Vitor Felipe
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
