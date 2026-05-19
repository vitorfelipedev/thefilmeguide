import React from 'react';
import styles from './Home.module.css';
import useFetch from '../hooks/useFetch';
import { MOVIES_POPULAR_GET, SERIES_POPULAR_GET } from '../services/api';
import { GenresContext } from '../context/GenresContext';
import MediaSlide from '../components/MediaSlide';
import MediaCardSkeleton from '../components/MediaCardSkeleton';

const Home = () => {
  const { error, loading, request } = useFetch();
  const [movies, setMovies] = React.useState([]);
  const [series, setSeries] = React.useState([]);
  const genres = React.useContext(GenresContext);
  React.useEffect(() => {
    async function fetchData() {
      const [moviesResponse, seriesResponse] = await Promise.all([
        request(MOVIES_POPULAR_GET()),
        request(SERIES_POPULAR_GET()),
      ]);
      setMovies(
        moviesResponse.response.data.results.map((movie) => ({
          ...movie,
          media_type: 'movie',
        })),
      );
      setSeries(
        seriesResponse.response.data.results.map((serie) => ({
          ...serie,
          media_type: 'tv',
        })),
      );
    }
    fetchData();
  }, [request]);

  if (loading) {
    return (
      <section className={`container mainContainer ${styles.home}`}>
        <div className={styles.skeletonRow}>
          {[...Array(5)].map((_, index) => (
            <MediaCardSkeleton key={index} />
          ))}
        </div>
        <div className={styles.skeletonRow}>
          {[...Array(5)].map((_, index) => (
            <MediaCardSkeleton key={index} />
          ))}
        </div>
      </section>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <section className={`container mainContainer ${styles.home}`}>
      <MediaSlide mediaList={movies} title="Movies" genres={genres} />
      <MediaSlide mediaList={series} title="TV Show" genres={genres} />
    </section>
  );
};

export default Home;
