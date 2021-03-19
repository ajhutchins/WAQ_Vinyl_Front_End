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
    this.getVinylLastInserted = this.getVinylLastInserted.bind(this)
    this.addToUsersCollection = this.addToUsersCollection.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value})
    console.log(event.currentTarget.value)
  }

  handleSubmit (event) {
    // event.preventDefault()
    fetch(this.state.baseURL + '/vinyl/', {
      method: 'POST',
      body: JSON.stringify({


        title: event.title,
        cover_image: event.cover_image      
      
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then (res => res.json())
      .then (resJson => {
        this.props.addVinylToCollection(resJson)
        this.getVinylLastInserted() 
        this.setState({
          name: ''
        })
    }).catch (error => console.error({'Error': error}))    
  }

  getVinylLastInserted() {
    fetch(this.state.baseURL + '/vinyl/')
      .then(response => {
        return response.json()   
      }).then(json => {    
        this.setState({
        usersVinyls: json,
      })

      this.addToUsersCollection(this.state.usersVinyls[this.state.usersVinyls.length -1])  
    },
      err => console.log(err))
}

  addToUsersCollection = (vinyl) => {
    console.log(vinyl)
    console.log(vinyl.title)
    console.log(vinyl._id)
    fetch(this.state.baseURL  + '/users/collection/' + vinyl._id, {
      method: 'PUT',
      body: JSON.stringify(vinyl),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {

    })
  }
  
  render () {
    return  (
      <div className="discogs-return-results-container">
        <h2 id="result-h2-search">Search Results</h2>

        <ul>
        {this.props.vinyl.results.map((value, index) => {
          return(
            <li className="discogs-return-result-item">
            <img src={this.props.vinyl.results[index].thumb}></img>
            <h2 id="result-h2">Artist: {this.props.vinyl.results[0].title} </h2>
            <h2 id="result-h2">Album Title: {this.props.vinyl.results[index].title} </h2>
            <h2 id="result-h2">Format: {this.props.vinyl.results[index].format} </h2>
            <h2 id="result-h2">Genre: {this.props.vinyl.results[index].genre} </h2>
            <h2 id="result-h2">Label: {this.props.vinyl.results[index].label} </h2>
            <h2 id="result-h2">Country: {this.props.vinyl.results[index].country} </h2>
            <h2 id="result-h2">Year: {this.props.vinyl.results[index].year} </h2>
            <div className="search-result-buttons">
              <button id="search-result-collection-button" onClick={ () => { this.handleSubmit(this.props.vinyl.results[index]) } } >Add to My Collection</button>
              <button id="search-result-wishlist-button" onClick={ () => { this.props.addVinylToWishlist(this.props.vinyl) } } >Add to Wishlist</button>
            </div>
            </li>
          )
        })}
        </ul>
        </div>
    )
  }
}

export default DiscogsSearchResults;

