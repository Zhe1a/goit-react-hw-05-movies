import { AppHome } from 'components/AppThemoviedb/AppMovies';
import s from './Home.module.css';
import ListMovies from './ListMovies/ListMovies';
import { useState, useEffect } from 'react';

const Home = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {

    console.log('world');
    AppHome()
      .then(({ results }) => {
        console.log(results);
        setList(results);
      })
      .catch(error => setError(error.message));
  }, []);

  return (
    <div>
      <div className={s.box}>
        <h1 className={s.title_trending}>Trending Today</h1>
      </div>
      {list.length > 0 ? (
        <ul>
          {list.map(({ title, id, backdrop_path, name }) => {
            return (
              <ListMovies
                key={id}
                title={title}
                posterPath={backdrop_path}
                name={name}
              />
            );
          })}
        </ul>
      ) : (
        <h1 className={s.titel_error}>{error}</h1>
      )}
    </div>
  );
};

export default Home;
