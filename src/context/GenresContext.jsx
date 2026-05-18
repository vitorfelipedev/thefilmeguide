import React from 'react';

import useFetch from '../hooks/useFetch';

import { MOVIE_GENRES_GET, TV_GENRES_GET } from '../services/api';

// eslint-disable-next-line react-refresh/only-export-components
export const GenresContext = React.createContext();

export const GenresProvider = ({ children }) => {
  const { request } = useFetch();

  const [genres, setGenres] = React.useState({});

  React.useEffect(() => {
    async function fetchGenres() {
      const [movieGenres, tvGenres] = await Promise.all([
        request(MOVIE_GENRES_GET()),
        request(TV_GENRES_GET()),
      ]);

      const allGenres = [
        ...movieGenres.response.data.genres,
        ...tvGenres.response.data.genres,
      ];

      const genresMap = {};

      allGenres.forEach((genre) => {
        genresMap[genre.id] = genre.name;
      });

      setGenres(genresMap);
    }

    fetchGenres();
  }, [request]);

  return (
    <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>
  );
};
