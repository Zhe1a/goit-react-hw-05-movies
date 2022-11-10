import { AppMovieDetails } from 'components/AppThemoviedb/AppMovies';

import { Link } from 'react-router-dom';
import s from './ListMovies.module.css';
const ListMovies = ({ title, name, id, }) => {
  return (
    <li className={s.list}>
      <Link to={`/movies/${id}`}>
        <p className={s.link}> {title ?? name}</p>
      </Link>
    </li>
  );
};

export default ListMovies;
