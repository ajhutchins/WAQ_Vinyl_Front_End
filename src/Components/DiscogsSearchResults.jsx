import React, { Component } from 'react';

class DiscogsSearchResults extends Component {
  render () {
    return  (
      <div className="discogs-return-results-container">
        <h2>{console.log(this.props.vinyl.results[0].title)} </h2>
        <h2>{console.log(this.props.vinyl.results[1].title)} </h2>
        <h2>{console.log(this.props.vinyl.results[1].thumb)} </h2>
        <h2>{console.log(this.props.vinyl.results[1].year)} </h2>
        <h2>Search Results</h2>
        <ul>
        {this.props.vinyl.results.map((value, index) => {
          return(
            <li className="discogs-return-result-item">
            <h2>Artist: {this.props.vinyl.results[0].title} </h2>
            <h2>Album Title: {this.props.vinyl.results[index].title} </h2>
            <h2>Format: {this.props.vinyl.results[index].format} </h2>
            <h2>Genre: {this.props.vinyl.results[index].genre} </h2>
            <h2>Label: {this.props.vinyl.results[index].label} </h2>
            <h2>Country: {this.props.vinyl.results[index].country} </h2>
            <img src={this.props.vinyl.results[index].thumb}></img>
            <h2>Year: {this.props.vinyl.results[index].year} </h2>
            <button onClick={ () => { this.props.addVinylToCollection(this.props.vinyl) } } >Add to My Collection</button>
            <button onClick={ () => { this.props.addVinylToWishlist(this.props.vinyl) } } >Add to Wishlist</button>
            </li>
          )
        })}
        </ul>
        </div>
    )
  }
}

export default DiscogsSearchResults;

