import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Button, Jumbotron } from "react-bootstrap";
import { getTest } from './services/api';
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super()
  }

  getTestRequest() {
    const {username} = this.props
    getTest()
      .then((res) => {
        console.log(res)
      });
  }

  componentWillMount() {
    this.getTestRequest()
  }

  render() {
    return (
      <div className="container">
        <Navbar className="navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CryptoPocket</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Jumbotron>
          <h1>Hello, world!</h1>
        </Jumbotron>
      </div>
    );
  }
}

ReactDOM.render((
  <App />
), document.getElementById("root"))

