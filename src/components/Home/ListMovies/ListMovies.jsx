import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './ListMovies.module.css';

const ListMovies = ({ title, name, id }) => {
  const navigate = useNavigate();

  return (
    <li className={s.list}>
      <Link
        to={`/movies/${id}`}
        onClick={() => {
          navigate(id);
        }}
      >
        <p className={s.link}> {title ?? name}</p>
      </Link>
    </li>
  );
};

export default ListMovies;
