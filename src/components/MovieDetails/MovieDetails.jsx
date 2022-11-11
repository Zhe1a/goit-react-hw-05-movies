import { AppMovieDetails } from 'components/AppThemoviedb/AppMovies';
import s from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledLink } from 'components/StyledLink/StyledLink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const getYear = () => new Date(movie.release_date).getFullYear();
  let activeClassName = {
    color: '#2196f3',
  };

  useEffect(() => {
    setLoading(true);
    AppMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);
  const handleClick = () => navigate(location?.state?.from ?? '/');
  return (
    <div>
      <button onClick={handleClick} className={s.backButton}>
        Go back
      </button>

      {movie && <h1 className={s.title}>{movie.title}</h1>}
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      {movie && (
        <div className={s.movie}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>({getYear()})</p>
            <p>User Score: {movie.popularity}</p>
          </div>
          <div className={s['movie_overview']}>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <hr />

      <div className={s.box}>
        <h2>Additional Information</h2>
        <div className={s.box_link}>
          <StyledLink
            to={`/movies/${movieId}/reviews`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className={s.reviews}>Reviews</p>
          </StyledLink>

          <StyledLink
            to={`/movies/${movieId}/cast`}
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
            state={location.state}
          >
            <p className={s.cast}>Cast</p>
          </StyledLink>
        </div>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
