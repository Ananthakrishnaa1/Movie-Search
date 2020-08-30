import React, { useState, Fragment } from "react";
import MovieData from "../movies.json";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredStates, setFilteredStates] = useState(MovieData);
  const [radio, SetRadio] = useState("");
  let filter = [];
  const handleSearchInputChanges = (e) => {
    setSearch(e.target.value);
  };

  const callSearchFunction = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
    if (radio === 1) {
      filter = MovieData.filter((movie) => {
        return movie.year.toString().includes(search);
      });
    } else {
      filter = MovieData.filter((movie) => {
        return movie.genres.includes(search);
      });
    }

    setFilteredStates(filter);
    setSearch("");
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <Fragment>
      <div>
        <h1>Movie Search</h1>
        <input
          type="radio"
          value="Year"
          onClick={(e) => SetRadio(1)}
          name="filters"
        />
        Year
        <input
          type="radio"
          value="Genre"
          onClick={(e) => SetRadio(2)}
          name="filters"
        />
        Genres
      </div>
      <div>
        <input value={search} onChange={handleSearchInputChanges} type="text" />
        <input onClick={callSearchFunction} type="submit" />
        <input onClick={refreshPage} type="reset" />
      </div>
      <h2>Search Result</h2>
      <div>
        {filteredStates.map((movie) => {
          return (
            <div>
              <h4>
                Title : {movie.title} {movie.year}
              </h4>
              <ul>
                {movie.genres.map((genre) => {
                  return <li>{genre}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default App;
