import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend here'
}



class Wishlist extends Component {
    render() {
        return(
            <div>

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