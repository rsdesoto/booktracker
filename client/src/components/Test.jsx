import React from 'react'
import axios from 'axios'

export default class Test extends React.Component {

  componentDidMount() {
    window.fetch('/api/books')
      .then(response => response.json())
      // .then(json => console.log(json))

    axios.get('/api/books').then(response => {
      console.log('axios')
      // console.log(response)
    })
  }

  render() {
    return (
      <div>
      Hello World
      </div>
    )
  }
}


// to do:
// using hooks: get authors and books loaded up together
