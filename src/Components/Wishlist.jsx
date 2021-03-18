import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://whispering-everglades-63027.herokuapp.com'
}



class Wishlist extends Component {
    render() {
        return(
            <div>
              <h1>Wishlist</h1>

            </div>
        )
    }
}

export default Wishlist


/*
- Must have delete route(x) 
- Needs to show wishlist collection
- Needs a GET route
- Get collection on page as list first then try to style afterwards
- use :hover



*/