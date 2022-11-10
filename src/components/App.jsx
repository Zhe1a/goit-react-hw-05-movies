import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Home from './Home/Home';
// import Movies from './Movies/Movies';
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
        {/* <StyledLink to="/movies">Movies</StyledLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} /> */}
        <Route path="/movies/:movieId" element={null} />
        <Route path="/movies/:movieId/cast" element={null} />
        <Route path="/movies/:movieId/reviews" element={null} />
        <Route path="*" element={<h1>error</h1>} />
      </Routes>
    </>
  );
};
