import React from 'react'

export default class Test extends React.Component {

  componentDidMount() {
    window.fetch('/api/books')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  render() {
    return (
      <div>
      Hello World
      </div>
    )
  }
}
