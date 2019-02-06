import React, { Component } from 'react';
import MovieItem from './MovieItem';

class MovieList extends Component {
    render(){
        const { Poster, Title, imdbID} = this.props.movie;
       return( 
        //Add watched and wanted List
        <div key={imdbID}>         
            <MovieItem 
            poster={Poster} 
            title={Title} 
            imdbID={imdbID}
            />
        </div>    
       )
    };
}

export default MovieList