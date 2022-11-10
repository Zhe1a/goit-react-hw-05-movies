import {AppMovies} from 'components/AppThemoviedb/AppMovies';
import ListMovies from 'components/Home/ListMovies/ListMovies';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (submit === '') return;
    AppMovies(submit).then(res => {
      setResults(res.results);
    });
  }, [submit]);
  console.log(results);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          setSubmit(value);
        }}
      >
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {results.map(({ title, id, backdrop_path, name }) => {
        return (
          <ListMovies
            key={id}
            title={title}
            posterPath={backdrop_path}
            name={name}
          />
        );
      })}
    </div>
  );
};

export default Movies;
