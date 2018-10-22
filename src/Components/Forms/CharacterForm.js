import React, { Component, Fragment } from 'react';
import Avatar from '../Display/Avatar';
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

export default class CharacterForm extends Component {
  state = {
    charName: '',
    gender: '',
    strength: 4,
    endurance: 4,
    speed: 4,
    wisdom: 4,
    remainingPoints: 10
  }

  constructor(props) {
    super(props);
  }

  addStat = (stat) => {
    return () => {
      if (this.state.remainingPoints > 0) {
        this.setState({
          [stat]: this.state[stat] + 1,
          remainingPoints: this.state.remainingPoints - 1
        });
      }
    }
  }

  subtractStat = (stat) => {
    return () => {
      if (this.state[stat] > 4) {
        this.setState({
          [stat]: this.state[stat] - 1,
          remainingPoints: this.state.remainingPoints + 1
        });
      }
    }
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      charSeed: Math.random()
    });
  }

  render() {
    return (
      <Fragment>
        <h1>New Character</h1>
        <p>Looks like you don't have a character to play the game with.
          <br />Let's get one set up for you!
        </p>
        <Row>
          <Col md={{size: 6, offset: 3}}>
            <legend>Appearance</legend>
            <Row>
              <Col md={{size: 4}}>
              {this.state.charName && this.state.gender
              ? <Avatar gender={this.state.gender} seed={this.state.charName + this.state.charSeed} />
              : <p>This will show up once you decide on a name and gender.</p>}
              </Col>
            </Row>
            <Form>
              <FormGroup>
                <Label for="charName"><legend>Character Name</legend></Label>
                <Input
                  type="text"
                  name="charName"
                  id="charName"
                  placeholder="Mr Snuggles"
                  onChange={this.handleInputChange}
                />
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Gender</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="gender" value="male" onChange={this.handleInputChange} />
                    Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="gender" value="female" onChange={this.handleInputChange}/>
                    Female
                  </Label>
                </FormGroup>
              </FormGroup>
            </Form>
            <legend>Stats</legend>
            <h6>Remaining Points: {this.state.remainingPoints}</h6>
            <h6>Strength</h6>
            <Row>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.subtractStat('strength')}>-</Button>
              </Col>
              <Col md={{size: 2}} xs={{size: 4}}>{this.state.strength}</Col>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.addStat('strength')}>+</Button>
              </Col>
            </Row>
            <h6>Endurance</h6>
            <Row>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.subtractStat('endurance')}>-</Button>
              </Col>
              <Col md={{size: 2}} xs={{size: 4}}>{this.state.endurance}</Col>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.addStat('endurance')}>+</Button>
              </Col>
            </Row>
            <h6>Speed</h6>
            <Row>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.subtractStat('speed')}>-</Button>
              </Col>
              <Col md={{size: 2}} xs={{size: 4}}>{this.state.speed}</Col>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.addStat('speed')}>+</Button>
              </Col>
            </Row>
            <h6>Wisdom</h6>
            <Row>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.subtractStat('wisdom')}>-</Button>
              </Col>
              <Col md={{size: 2}} xs={{size: 4}}>{this.state.wisdom}</Col>
              <Col md={{size: 2}} xs={{size: 4}}>
                <Button onClick={this.addStat('wisdom')}>+</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}