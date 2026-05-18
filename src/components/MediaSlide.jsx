import React from 'react';
import MediaCard from './MediaCard';
import styles from './MediaSlide.module.css';
import ArrowBack from '../assets/arrow_back.svg?react';
import ArrowForward from '../assets/arrow_forward.svg?react';

const MediaSlide = ({ mediaList, title, genres }) => {
  const slideRef = React.useRef();
  const slideSize = window.innerWidth < 800 ? 300 : 800;
  function slideLeft() {
    slideRef.current.scrollLeft -= slideSize;
  }

  function slideRight() {
    slideRef.current.scrollLeft += slideSize;
  }

  return (
    <section className={styles.slideSection}>
      <div className={styles.header}>
        <h1>{title}</h1>

        <div className={styles.buttons}>
          <button onClick={slideLeft}>
            <ArrowBack />
          </button>
          <button onClick={slideRight}>
            <ArrowForward />
          </button>
        </div>
      </div>
      <div className={styles.slide} ref={slideRef}>
        {mediaList.map((movie) => (
          <MediaCard key={movie.id} media={movie} genres={genres} />
        ))}
      </div>
    </section>
  );
};

export default MediaSlide;
