import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center'>React Boilerplate</h1>
        { this.props.children }
      </div>
    )
  }
}
