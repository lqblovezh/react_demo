import React, { Component } from 'react'
import '../App.css'

export default class Header extends Component {
  render() {
    return (
      <div className="header" style={{ color: '#fff' }}>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
