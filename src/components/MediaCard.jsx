import styles from './MediaCard.module.css';
import Star from '../assets/star.svg?react';
import View from '../assets/view.svg?react';
import noImage from '../assets/noImage.jpg';
import { Link } from 'react-router-dom';
const MediaCard = ({ media, genres }) => {
  const title = media.title || media.name;
  const year =
    new Date(media.release_date).getFullYear() ||
    new Date(media.first_air_date).getFullYear();
  return (
    <Link to={`/${media.media_type}/${media.id}`} className={styles.card}>
      <div className={styles.image}>
        <img
          src={
            media.poster_path
              ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
              : noImage
          }
          alt={`Banner do filme ${title}`}
          loading="lazy"
        />
        <span className={styles.overlay}>
          <View className={styles.viewIcon} />
        </span>
      </div>
      <div className={styles.info}>
        <span className={styles.tag}>{media.media_type}</span>
        {media.genre_ids.map((genre) => (
          <span className={styles.tag} key={genre}>
            {genres[genre]}
          </span>
        ))}
      </div>
      <h2 className={styles.title}>
        {title} ({year})
      </h2>
      <p className={styles.rating}>
        Public Assessment: <Star className={styles.star} />
        <span>{Number(media.vote_average).toFixed(2)}</span>
      </p>
    </Link>
  );
};

export default MediaCard;
