import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { StyledLink } from './StyledLink/StyledLink';

const Home = lazy(() => {
  return import('./Home/Home');
  // import Home from './Home/Home';
});
const Movies = lazy(() => {
  return import('./Movies/Movies');
  // import Movies from './Movies/Movies';
});

const MovieDetails = lazy(() => {
  return import('./MovieDetails/MovieDetails');
  // import MovieDetails from './MovieDetails/MovieDetails';
});
const MoviesCast = lazy(() => {
  return import('./MoviesCast/MoviesCast');
  // import MoviesCast from './MoviesCast/MoviesCast';
});
const MoviesReviews = lazy(() => {
  return import('./MoviesReviews/MoviesReviews');
  // import MoviesReviews from './MoviesReviews/MoviesReviews';
});
export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/" end className="link">
          Home
        </StyledLink>
        <StyledLink to="/movies" className="link">
          Movies
        </StyledLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<MoviesCast />} />
            <Route
              path="/movies/:movieId/reviews"
              element={<MoviesReviews />}
            />
            {/* <Route path="*" element={<Navigate to="/movies" />} /> */}
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
