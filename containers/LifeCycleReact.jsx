import React, { Component } from "react";

class LifeCycleReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    console.log("constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log(this.state.count);
    console.log(nextState.count);
    if (this.state.count >= 4) return false;
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate");
  }

  buttonHandler = () => {
    if (this.state.count < 5)
      this.setState({
        count: this.state.count + 1,
      });
  };

  render() {
    return (
      <div className="lifecycle">
        <h3>LifeCycleReact</h3>
        <button onClick={this.buttonHandler}>
          in state is {this.state.count}
        </button>
      </div>
    );
  }
}

export default LifeCycleReact;
