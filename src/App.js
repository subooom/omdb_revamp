import React, { useState } from 'react';
import logo from './logo.PNG';
import './App.css';

import { connect } from "react-redux"

import {
  searchByTitle,
} from "./redux/movies/movies.actions"

function MovieList(props) {
  console.log(props.movies)
  return <div></div>
}

function App(props) {
  const [title, setTitle] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            props.searchByTitle(title);
          }}>
          <div className="form-group">
            <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" type="text" placeholder="Movie Title"></input>
          </div>
        </form>
        <MovieList movies={props.movies}></MovieList>
        <p className="Page-description">
          Using the <a href="http://www.omdbapi.com/" target="_blank" rel="noopener noreferrer"> http://www.omdbapi.com/</a> api to fetch movies.
        </p>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchByTitle: (title) => dispatch(searchByTitle(title)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
