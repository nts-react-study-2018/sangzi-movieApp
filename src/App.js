import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {
  state = { }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Lalaland",
            poster: "https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/2azT/image/qUYSjM4PWnEbPj_kg-CA6BLm6i8.png"
          },
          {
            title: "Lion King",
            poster: "https://studybreaks.com/wp-content/uploads/2017/08/the-lion-king-image.jpg"
          },
          {
            title: "Minions",
            poster: "http://cfile2.uf.tistory.com/image/277DA137563865442830CB"
          },
          {
            title: "About Time",
            poster: "http://cfile26.uf.tistory.com/image/236A5E4D52D6B15B03FD29"
          },
          {
            title: "Harry Potter",
            poster: "https://resizing.flixster.com/YYdNO_mQd8hXa_qekp7cWlAnyII=/180x240/v1.bTsxMTMwNDIyNjtqOzE3NjgwOzEyMDA7MTUyMDsyMTUx"
          }
        ]
      })
    }, 1500);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(function(arr, index){
      return <Movie title={arr.title} poster={arr.poster} key={index}/>
    }) 
    return movies;
  }

  render(){
    return (
      <div>
        { 
          this.state.movies ? this._renderMovies() : "loading"
        }
      </div>
    );
  }

}

export default App;