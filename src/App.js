import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/header'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1,
      fontSize: '12px',
    }
  }
  componentWillMount() {}
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: 0.5,
        fontSize: '44px',
      })
    }, 1000)
  }
  btnClick = () => {
    console.log(this.state)
  }
  render() {
    let arr = [<h1 key="1">菜鸟教程</h1>, <h2 key="2">学习的不仅是技术</h2>]
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Header title="测试"></Header>
        <button onClick={this.btnClick}>点击</button>
        <div>{arr}</div>
        <p
          className="App-intro"
          style={{ opacity: this.state.opacity, fontSize: this.state.fontSize }}
        >
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
