import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  state ={}

  componentDidMount(){
    this._getMovies();
  
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(function(arr){
      // console.log(arr)
      // console.log( arr.genre_ids )
      
      return <Movie 
        title={arr.original_title} 
        poster={"https://image.tmdb.org/t/p/w500" + arr.poster_path} 
        key={arr.id}
        synopsis={arr.overview}
        genres={arr.genre_ids}
      />
    }) 
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }

  // api_key=fedb207b7efaaf0fdfaf8a48419c4fe6&language=en
  // https://api.themoviedb.org/3/genre/movie/list?api_key=fedb207b7efaaf0fdfaf8a48419c4fe6&language=en-US

  _callApi = () => {
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=fedb207b7efaaf0fdfaf8a48419c4fe6&language=en&page=2')
    .then(patato => patato.json())
    .then(json => json.results )
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        { this.state.movies ? this._renderMovies() : "loading" }
      </div>
    );
  }
}

export default App;