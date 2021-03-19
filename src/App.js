import React, { Component } from 'react'
import Wishlist from './Components/Wishlist'
import Collection from './Components/Collection'
import DiscogsSearchResults from './Components/DiscogsSearchResults';
import NavBar from './Components/NavBar';


let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://whispering-everglades-63027.herokuapp.com'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      discogsSearchValue: '',
      discogsURL: 'https://api.discogs.com/database/search?q=',
      token: '&token=hLKyUdeGzviIupbdIpyGeAYPVXUFOSdPDKBonIQj',
      artistName: '',
      searchURL: '',
      userCollection: [],
      userWishlist: [],
      collections: [],
      baseURL: 'http://localhost:3003',
      usersVinyls: {
        myCollection: []
      }

    }
    this.handleSearchDiscogsInputChange = this.handleSearchDiscogsInputChange.bind(this);
    this.handleSearchDiscogsSubmit = this.handleSearchDiscogsSubmit.bind(this);
    this.searchDiscogs = this.searchDiscogs.bind(this)
    this.getUserCollection = this.getUserCollection.bind(this)
  }

////////////////////
//  DiscogsSearchResults
///////////////////

  searchDiscogs (event) {
    event.preventDefault()
    this.setState({
      answerHidden: false,
      searchURL: ((this.state.discogsURL) + (this.state.discogsSearchValue) + (this.state.token)) ,
    }, () => {
      fetch(this.state.searchURL)
        .then(response => {
          return response.json()
        }).then(json => this.setState({
          vinyl: json,
        }),
        err => console.log(err))
    })
  }

  handleSearchDiscogsInputChange(event) {
    this.setState({discogsSearchValue: event.target.value});
  }
  
  handleSearchDiscogsSubmit(event) {
    event.preventDefault();
    this.searchDiscogs(event);
  }
  
  addVinylToCollection(vinyl) {
    console.log(`Found Vinly to add ${vinyl}`)
    // this.setState({
    //   userCollection: [vinyl, ...this.state.userCollection],
    // })
    console.log(vinyl)
    fetch(baseURL + '/vinyl/' + vinyl._id, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
         const copyUserCollection = [...this.state.userCollection]
          const findIndex = this.state.userCollection.findIndex(vinyl => vinyl._id === resJson._id)
          copyUserCollection[findIndex].celebrated = resJson.celebrated
          this.setState({userCollection: copyUserCollection})
    })
  }
  
  addVinylToWishlist(vinyl) {
    this.setState({
      userWishlist: [vinyl, ...this.state.userWishlist],
    })
  }


////////////////////
// Collections
///////////////////

componentDidMount() {
  this.getUserCollection()
}

// getUserCollection() {
//   console.log(baseURL + '/users/collection')
//   fetch(baseURL + '/users/collection')
//   .then(data => { return data.json() }, err => console.log(err))
//   .then(parsedData => this.setState({ userCollection: parsedData }), err => console.log(err))
// }

getUserCollection() {
  fetch(baseURL + '/users/collection')
    .then(response => {
      return response.json()
    }).then(json => this.setState({
        usersVinyls: json,
      }),
      err => console.log(err))

}


  render() {
    return(
      <div>
        <h1 className="app-title">WAQ VINYL</h1>
        <div className="users-nav-content-container">
        <NavBar getCollection={ () => this.getCollection() }/>
        <div className="components-container">
        <form className="discogs-search-form-container" onSubmit={this.handleSearchDiscogsSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.discogsSearchValue} onChange={this.handleSearchDiscogsInputChange} />
            </label>
            <button className="search-button" onClick={this.searchDiscogs} >Search</button>
       </form>
      {(this.state.vinyl)
            ? <DiscogsSearchResults 
            addVinylToCollection={ (vinyl) => this.addVinylToCollection(vinyl) }
            addVinylToWishlist={ (vinyl) => this.addVinylToWishlist(vinyl) }
            vinyl={this.state.vinyl} 
            />
            : ''
          }
          <Collection  userCollect={this.state.usersVinyls} />
          
          <button className="" onClick={this.getUserCollection} >getUserCollection</button>
          </div>
          
      </div>
      </div>
    )
  }
}

export default App
