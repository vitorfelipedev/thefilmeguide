import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {
  MOVIE_DETAILS_GET,
  MOVIE_TRAILER_GET,
  MOVIE_CREDITS_GET,
  SERIE_DETAILS_GET,
  SERIE_TRAILER_GET,
  SERIE_CREDITS_GET,
} from '../services/api';
import Star from '../assets/star.svg?react';
import Calendar from '../assets/calendar.svg?react';
import Time from '../assets/time.svg?react';
import styles from './MovieDetails.module.css';
import noImage from '../assets/noImage.jpg';

const MovieDetails = ({ type }) => {
  const { id } = useParams();
  const { error, loading, request } = useFetch();
  const [details, setDetails] = React.useState(null);
  const [trailer, setTrailer] = React.useState([]);
  const [credits, setCredits] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const isMovie = type === 'movie';
      const detailsApi = isMovie
        ? MOVIE_DETAILS_GET(id)
        : SERIE_DETAILS_GET(id);
      const trailerApi = isMovie
        ? MOVIE_TRAILER_GET(id)
        : SERIE_TRAILER_GET(id);
      const creditsApi = isMovie
        ? MOVIE_CREDITS_GET(id)
        : SERIE_CREDITS_GET(id);
      const [detailsResponse, trailerResponse, creditsResponse] =
        await Promise.all([
          request(detailsApi),
          request(trailerApi),
          request(creditsApi),
        ]);
      if (detailsResponse.response) setDetails(detailsResponse.response.data);
      if (trailerResponse.response)
        setTrailer(trailerResponse.response.data.results);
      if (creditsResponse.response) setCredits(creditsResponse.response.data);
    }
    fetchData();
  }, [request, id, type]);
  if (loading) {
    return <p>Buscando resultados...</p>;
  }
  if (error) {
    return <p>Erro ao buscar: {error}</p>;
  }
  if (!details) return null;

  const title = details.title || details.name;
  const releaseDate = details.release_date || details.first_air_date;
  const infoExtra =
    type === 'movie'
      ? `${details.runtime} min`
      : `${details.number_of_seasons} Temporadas`;
  const officialTrailer = trailer.find(
    (video) => video.type === 'Trailer' && video.site === 'YouTube',
  );
  return (
    <section className={`container ${styles.details}`}>
      <div className={styles.banner}>
        {details.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
            alt={title}
          />
        )}
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : noImage
            }
            alt={title}
          />
        </div>
        <div className={styles.info}>
          <h1>{title}</h1>
          <p className={styles.overview}>{details.overview}</p>
          <div className={styles.meta}>
            <span>
              <Star className={styles.star} />
              {Number(details.vote_average).toFixed(2)}
            </span>
            <span>
              <Calendar className={styles.icon} /> {releaseDate}
            </span>
            <span>
              <Time className={styles.icon} /> {infoExtra}
            </span>
          </div>
          {officialTrailer && (
            <>
              <h2>Trailer</h2>
              <div className={styles.trailer}>
                <iframe
                  title="Trailer"
                  src={`https://www.youtube.com/embed/${officialTrailer.key}`}
                  allowFullScreen
                />
              </div>
            </>
          )}
          {credits?.cast?.length > 0 && (
            <>
              <h2>Cast</h2>
              <ul className={styles.cast}>
                {credits.cast.slice(0, 10).map((actor) => (
                  <li key={actor.id}>{actor.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
