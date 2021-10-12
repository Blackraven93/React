import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "기본 이름",
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;

    return (
      <div>
        이건 Class 형태의 컴포넌트야. 나의 이름은 {name} 너는 {children}
      </div>
    );
  }
}

export default MyComponent;
