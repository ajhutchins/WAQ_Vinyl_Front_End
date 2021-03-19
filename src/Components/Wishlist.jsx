import React, { Component } from 'react'
import UserVinyl from './UserVinyl';
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://whispering-everglades-63027.herokuapp.com'
}

class Wishlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      userWishlist: []

    }
  }

  componentDidMount() {
    this.getUserCollection()
  }

  getUserCollection() {
    fetch(baseURL + '/users/wishlist')
      .then(response => {
        return response.json()
      }).then(json => this.setState({
        userWishlist: json,
        }),
        err => console.log(err))
  }

    deleteCollection(id) {
    console.log('deleting')
    console.log(id)
    fetch(baseURL + '/users/wishlist/' + id, {
      method: 'DELETE',
    }).then(res => res.json())
    .then(res => {
      console.log(this.state.userWishlist);
      const copyUserCollect = [...this.state.userWishlist];
      const findIndex = this.state.userWishlist.findIndex(vinyl => vinyl._id === id);
      copyUserCollect.splice(findIndex, 1);
      this.setState({userWishlist: copyUserCollect});
    })
  }
  
    render() {
        return(
            <div>
              <h1>My Collection</h1>
            <ul>
              {this.props.userWishlist.wishlist.map((value, index) => {
                console.log(this.props.userWishlist.wishlist)
                return(
                  <li className="discogs-return-result-item">
                  <h2>Album: {this.props.userWishlist.wishlist[index].title} </h2>
                  <img src={this.props.userWishlist.wishlist[index].cover_image} ></img>
                  <div className="delete-vinyl-from-user-collection-button"  onClick={this.deleteCollection(this.props.userWishlist.wishlist[index]._id)}>X</div>
                  </li>
                )
              })}
              </ul>
              </div>
        )
    }
}

export default Wishlist