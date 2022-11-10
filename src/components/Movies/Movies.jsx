import { AppMovies } from 'components/AppThemoviedb/AppMovies';
import ListMovies from 'components/Home/ListMovies/ListMovies';
import { useState, useEffect } from 'react';

const Movies = () => {
  const [value, setValue] = useState('');
  const [submit, setSubmit] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    if (submit === '') return;
    AppMovies(submit)
      .then(res => {
        setResults(res.results);
      })
      .catch(error => console.log(error.message));
  }, [submit]);

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
      {results.map(({ title, id, name }) => {
        return <ListMovies id={id} key={id} title={title} name={name} />;
      })}
    </div>
  );
};

export default Movies;
