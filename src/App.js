import MyComponent from "./components/MyComponent";
import Counter from "./components/Counter";
import EventPractice from "./components/EventPractice";
import Inputs from "./components/Inputs";
import PropTypes from "prop-types";

function App() {
  const name = "React";
  return (
    <>
      {name === "React" && <h1>리액트 입니다.</h1>}
      <MyComponent name="raven">리액트</MyComponent>
      <MyComponent children="React" />
      <Counter></Counter>
      <EventPractice></EventPractice>
      <Inputs />
    </>
  );
}

export default App;
