import React, { Component } from "react";
import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import EventPractice from "./components/EventPractice";
import Inputs from "./components/Inputs";
import ValidationSample from './components/Validation/ValidationSample'
import IterationSample from './components/IterationSample'
import LifeCycleSample from './components/LifeCycleSample'
import ErrorBoundary from './components/ErrorBoundary'

const getRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  state = {
    color: '#000000'
  }

  name = "React";



  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }

  render() {
    return (
      <div>
        {this.name === "React" && <h1>리액트 입니다.</h1>}
        <MyComponent name="raven">리액트</MyComponent>
        <MyComponent children="React" />
        <Counter></Counter>
        <EventPractice></EventPractice>
        <Inputs />
        <ValidationSample />
        <IterationSample />
        <button onClick={this.handleClick}>Random color</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div >)
  }
}

export default App;
