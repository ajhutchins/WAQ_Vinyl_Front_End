import React, { Component } from 'react'
import UserVinyl from './UserVinyl';
let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://whispering-everglades-63027.herokuapp.com'
}

class Collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      userCollect: []

    }
  }

  componentDidMount() {
    this.getUserCollection()
  }

  getUserCollection() {
    fetch(baseURL + '/users/collection')
      .then(response => {
        return response.json()
      }).then(json => this.setState({
          userCollect: json,
        }),
        err => console.log(err))
  }

    deleteCollection(id) {
    console.log('deleting')
    console.log(id)
    fetch(baseURL + '/users/collection/' + id, {
      method: 'DELETE',
    }).then(res => res.json())
    .then(res => {
      console.log(this.state.userCollect);
      const copyUserCollect = [...this.state.userCollect];
      const findIndex = this.state.userCollect.findIndex(vinyl => vinyl._id === id);
      copyUserCollect.splice(findIndex, 1);
      this.setState({userCollect: copyUserCollect});
    })
  }
  
    render() {
        return(
            <div>
              <h1>My Collection</h1>
            <ul>
              {this.props.userCollect.myCollection.map((value, index) => {
                console.log(this.props.userCollect.myCollection)
                return(
                  <li className="my-collection-item-container">
                  <h2 className="album-name-container">{this.props.userCollect.myCollection[index].title} </h2>
                  <img src={this.props.userCollect.myCollection[index].cover_image} ></img>
                  {/* <div className="delete-vinyl-from-user-collection-button"  onClick={this.deleteCollection(this.props.userCollect.myCollection[index]._id)}>X</div> */}
                  </li>
                )
              })}
              </ul>
              </div>
        )
    }
}

export default Collection