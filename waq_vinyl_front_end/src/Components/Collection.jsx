import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend here'
}


class collection extends Component {
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default collection

/*
- Show my collection
- use get route for that
- we want to be able to delete(x) from this page
- use delete route for that
// * Update needs to be on single vinyl page 
- Needs solid HTML structure 
- use :hover
*/