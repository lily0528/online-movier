import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import { ImdbApi } from './APIs/ImdbApi';
import SearchResult from './Components/SearchResult';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';

class App extends Component {
  state = {
    query: '',
    results: [],
    myMovies:[],
  }

  inputChange = event => {
      this.setState({
          query: event.target.value
      });
  }

  //Search Api data
  submit = (e) => {
      e.preventDefault();
      ImdbApi.search(this.state.query)
      .then(json => this.setState({
        query: '',
        results: json.Search
      }));           
  }

  //Add already watched movie to array
  onWatched = (item) =>{
    this.setState((prevState) => ({
      myMovies: [...prevState.myMovies, 
                 {imdbID:item.imdbID, Poster:item.Poster, Title:item.Title, isWatched:true, isWanted:false}
                ]
    }))   
  }

  //Add Want to watch Moive to array
  onWatch = (item) =>{
    this.setState((prevState) => ({
      myMovies: [...prevState.myMovies, 
                {imdbID:item.imdbID, Poster:item.Poster, Title:item.Title, isWatched:false, isWanted:true}
                ]
    }))   
  }

  render() {   
    return (
      <div className="App">
      <div className="Title"><h1>ONLINE MOVIE</h1></div>
          <Route exact path="/" render={() => 
            <div>
              <Link to="/search">Search for a Movie</Link>
               {/* show isWatched List */}
                {this.state.myMovies.filter((movie) => movie.isWatched).map((movie,index) =>(
                  <div key={index}>
                    {index===0 && <h2>Watched Movies</h2>}
                    <MovieList 
                    key={index} movie={movie}  
                    /> 
                 </div>
                ))}
               {/* show isWanted List */}
               {this.state.myMovies.filter((movie) => movie.isWanted).map((movie,index) =>(
                  <div key={index}>
                    {index===0 && <h2>Movies To Watch</h2>}
                    <MovieList 
                    key={index} movie={movie}  
                    /> 
                 </div>
                ))}
            </div>
          } />
          <Route path="/search" render={() =>  
          <div>
             <Link to="/">
              Back to My Movies
             </Link>
              <SearchBar
              onInputChange={this.inputChange} 
              onSubmit={this.submit} query={this.state.query}
              />

              <SearchResult 
              results={this.state.results} 
              query={this.state.query}
              onWatch={this.onWatch} 
              onWatched={this.onWatched} 
              myMovies={this.state.myMovies} 
              />

          </div>
      } />
      </div>
    );
  }
}

export default App;
