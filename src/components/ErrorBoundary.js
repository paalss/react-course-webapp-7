import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  componentDidCatch(err) {
    console.error(err)
    this.setState({hasError: true})
  }

  render() {
    if (this.state.hasError) {
      return <p>something went wrong</p>; 
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
