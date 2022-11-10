import { Routes, Route, NavLink } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';

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

export const App = () => {
  const StyledLink = styled(NavLink)`
    color: black;
    &.active {
      color: orange;
    }
  `;
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
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={null} />
          <Route path="/movies/:movieId/reviews" element={null} />
          <Route path="*" element={<h1>error</h1>} />
        </Routes>
      </Suspense>
    </>
  );
};
