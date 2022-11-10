import s from './ListMovies.module.css';
const ListMovies = ({ title, name }) => {
  return (
    <li className={s.list}>
      <p className={s.title}>{title ?? name}</p>
    </li>
  );
};

export default ListMovies;
