import React from 'react';
import { useParams } from 'react-router-dom';

const TvDetails = () => {
  const { id } = useParams();
  return <h1>Detalhes Tv Show {id}</h1>;
};

export default TvDetails;
