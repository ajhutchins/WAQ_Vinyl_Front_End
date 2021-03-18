import React, { Component } from 'react'

let baseURL = ''

if(process.env.NODE_ENV === 'development'){
    baseURL = 'http://localhost:3003'
  } else {
    baseURL = 'https://whispering-everglades-63027.herokuapp.com'
  }

class UserVinyl extends Component {
    constructor(props) {
        super(props)
            this.state = {
                artist: '',
                title: '',
                year: '',
                genre: [],
                cover_image: '',
                label: [],
                quantity: 0,
                price: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch(baseURL + '/vinyl', {
            method: 'POST',
            body: JSON.stringify({ name: this.state.name }),
            headers: {
                'Content-Type': 'application/json'
            }
        })  .then(res => res.json())
            .then(resJson => {
                this.props.handleAddVinyl(resJson)
                this.setState({
                    artist: '',
                    title: '',
                    year: '',
                    genre: [],
                    cover_image: '',
                    label: [],
                    quantity: 0,
                    price: 0
                })
            }).catch (error => console.log({'Error': error}))
    }


    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor='name'>Artist Name:</label>
                    <input type="text" name="name" id="name" onChange={ this.handleChange } placeholder="add your favorite vinyl" value={ this.state.name }/>
                    <input type="submit" value="Add your favorite Vinyl" />
                </form>
            </div>
        )
    }
}

export default UserVinyl