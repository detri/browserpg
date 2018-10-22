import React, { Component } from 'react';
import CharacterForm from '../Forms/CharacterForm';
import { connect } from 'react-redux';

class Character extends Component {
  render() {
    if (!this.props.charName) {
      return(
        <CharacterForm />
      );
    } else {
      return <p>Character sheet coming soon</p>
    }
  }
}

export default connect(
  state => ({
    ...state.character
  })
)(Character);