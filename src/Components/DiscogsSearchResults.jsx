import React, { Component } from 'react';

class DiscogsSearchResults extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      baseURL: 'http://localhost:3003'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleChange(event) {
      this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    }
  
    handleSubmit (event) {
      event.preventDefault()
      fetch(this.state.baseURL + '/vinyl/', {
        method: 'POST',
        body: JSON.stringify({name: this.state.name}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then (res => res.json())
        .then (resJson => {
          this.props.addVinylToCollection(resJson)
          this.setState({
            name: ''
          })
      }).catch (error => console.error({'Error': error}))
    }
  
  render () {
    return  (
      <div className="discogs-return-results-container">
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

