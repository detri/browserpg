import React, { Component } from 'react';
import Nav from './Components/Layout/Nav';
import Character from './Components/Pages/Character';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Container>
          <Switch>
            <Route exact path='/' component={Character} />
            <Route path='/character' component={Character} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
