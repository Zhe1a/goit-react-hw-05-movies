import { AppMovieReviews } from 'components/AppThemoviedb/AppMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    AppMovieReviews(movieId)
      .then(({ results }) => setReviews(results))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [movieId]);
 
  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MoviesReviews;
