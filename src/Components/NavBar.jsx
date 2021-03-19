import React, { Component } from 'react';

class NavBar extends Component {
  render () {
    return  (
      <div className="nav-bar-container">  
      <button className="search-bar-button">Search</button>
      <button className="vinyl-style-button" onClick={this.getUserCollection}>My Collection</button>
      <button className="vinyl-style-button">Wishlist</button>
      </div>
    )
  }
}

export default NavBar;

