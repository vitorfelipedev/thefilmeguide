import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { GERAL_SEARCH_GET } from '../services/api';
import MediaCard from '../components/MediaCard';
import { GenresContext } from '../context/GenresContext';
import styles from './Search.module.css';

const Search = () => {
  const [result, setResult] = React.useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { error, loading, request } = useFetch();
  const genres = React.useContext(GenresContext);

  React.useEffect(() => {
    async function fetchData() {
      if (!query) return;
      const response = await request(GERAL_SEARCH_GET(query));
      setResult(response.response.data.results);
    }
    fetchData();
  }, [query, request]);

  const filteredResults = result.filter(
    (item) => item.media_type === 'movie' || item.media_type === 'tv',
  );

  return (
    <section className={`container ${styles.searchPage}`}>
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>
          Resultados para: <span>"{query}"</span>
        </h1>
      </header>
      {loading && (
        <div className={styles.feedbackCard}>
          <p>Buscando resultados...</p>
        </div>
      )}
      {error && (
        <div className={styles.feedbackCard}>
          <p>Erro ao buscar: {error}</p>
        </div>
      )}
      {filteredResults.length === 0 && !loading && !error && (
        <div className={styles.feedbackCard}>
          <p>Poxa, não encontramos nenhum filme ou série para "{query}".</p>
        </div>
      )}
      {!loading && filteredResults.length > 0 && (
        <div className={styles.grid}>
          {filteredResults.map((item) => (
            <MediaCard key={item.id} media={item} genres={genres} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Search;
