import React, { Component } from 'react';
import MovieItem from './MovieItem';

class SearchResult extends Component {
    render () {
        const { results, myMovies} = this.props;
        //Compare search movie results and current movie, return same state item.
        if (results === undefined){
            return `No movies found for the search term !`
            }    
        else{
        var movies = results.map(item => {
            myMovies.forEach(myMovie => {
                if (myMovie.imdbID === item.imdbID) {
                    item.isWatched = myMovie.isWatched;
                    item.isWanted = myMovie.isWanted;
                }
            });
            return item;           
        })};
            
        return (
            <div>
                {
                movies.map((item, index) => 
                <div key={index}>
                    <MovieItem 
                    poster={item.Poster}
                    title={item.Title}
                    imdbID={item.imdbID}
                    />
                    {/* Control button to show,item from movies,don't use this props */}
                    {item.isWatched || item.isWanted ||
                    <div>
                        <button onClick={() => this.props.onWatch(item)} className="onWatch">Want to Watch</button>
                        <button onClick={() => this.props.onWatched(item)} className="onWatched">Already watched</button>
                    </div>
                    }                       
                </div>
                )
                }
            </div>
        );
    }
}

export default SearchResult;