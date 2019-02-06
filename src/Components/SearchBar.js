import React, { Component } from 'react';

class SearchBar extends Component {
    render () {
        return (
            <div>
                <input value={this.props.query} placeholder="Moive Name" onChange={this.props.onInputChange} />
                <button onClick={this.props.onSubmit}>Search</button>
            </div>
        );
    }
}

export default SearchBar;