import React, { Component } from 'react';
import Avatars from '@dicebear/avatars';
import MaleSprites from '@dicebear/avatars-male-sprites';
import FemaleSprites from '@dicebear/avatars-female-sprites';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.femaleAvatars = new Avatars(FemaleSprites);
    this.maleAvatars = new Avatars(MaleSprites);
  }

  render() {
    return (
      <span
        className="avatar"
        dangerouslySetInnerHTML={{
          __html: this[this.props.gender === 'male' ? 'maleAvatars' : 'femaleAvatars'].create(this.props.seed)
        }}
      />
    )
  }
}