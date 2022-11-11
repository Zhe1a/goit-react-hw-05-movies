import { AppMovies } from 'components/AppThemoviedb/AppMovies';
import ListMovies from 'components/Home/ListMovies/ListMovies';
import { useState, useEffect } from 'react';
import {  useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);

  const searchRequest = searchParams.get('query');


  useEffect(() => {
    if (searchRequest === null) return;
    AppMovies(searchRequest)
      .then(res => {
        setResults(res.results);
      })
      .catch(error => console.log(error.message));
  }, [searchRequest]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: value.toLowerCase() });
    setValue('')
  };
  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
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
