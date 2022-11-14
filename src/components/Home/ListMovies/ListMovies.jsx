import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './ListMovies.module.css';

const ListMovies = ({ title, name, id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <li className={s.list}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        onClick={() => {
          navigate(id);
        }}
      >
        <p className={s.link}> {title ?? name}</p>
      </Link>
    </li>
  );
};
ListMovies.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
};
export default ListMovies;
