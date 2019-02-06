import React, { Component } from 'react';

class MovieItem extends Component {
    render () {
        const { poster, title, imdbID, index} = this.props;
        return (
            <div className="MoiveItem" key={index}>
                <img src={poster} alt={title} />
                <div>{imdbID}</div>
                <div>{title}</div>
            </div>
        );
    }
}

export default MovieItem;