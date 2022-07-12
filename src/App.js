import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 1
    }
  }

  // update() {
  //   this.setState({ num:this.State.num+1 })
  // }

  render() {
    return (

      <> 
      <h1>{this.state.num}</h1>
       
        <button onClick={()=>this.setState({num: this.state.num+1})}>plus</button>
        <button onClick={()=>this.setState({num: this.state.num-1})}>minus</button>
      </>
    );
  }
}

export default App;
