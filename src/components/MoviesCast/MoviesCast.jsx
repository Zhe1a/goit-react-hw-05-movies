import { AppMovieCast } from 'components/AppThemoviedb/AppMovies';
import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import s from './MoviesCast.module.css';
const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AppMovieCast(movieId)
      .then(({cast}) => {
        setCast(cast);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);
  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul className={s.castList}>
        {cast.map(castItem => {
          return (
            <li key={castItem.id} className={s.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w300${castItem.profile_path}`}
                alt={`${castItem.name} portrait`}
              />
              <div>
                <p>Name: {castItem.name}</p>
                <p>Character: {castItem.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MoviesCast;
