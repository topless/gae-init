import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar, Button, Jumbotron } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar className="navbar-fixed-top">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
