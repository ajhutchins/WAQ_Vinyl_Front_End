import React, { Component } from 'react'

let baseURL = ''

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'https://whispering-everglades-63027.herokuapp.com'
}




class collection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }


  // deleteCollection(id) {
  //   console.log('deleting')
  
  //   fetch(baseURL + '/vinyl/' + id, {
  //     method: 'DELETE',
  //   }).then(res => res.json())
  //   .then(resJson => {
  
  //   })
  // }
  
    render() {
        return(
            <div>
              <h1>My Collection</h1>

              <h2>{console.log(this.props.userCollect)} </h2>

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