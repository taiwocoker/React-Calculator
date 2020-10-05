import React, { Component } from 'react';
import '../index.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import Calculate from '../logic/calculate';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    const { total, next, operation } = this.state;
    const result = Calculate({ total, next, operation }, buttonName);
    this.setState({ total: result.total, next: result.next, operation: result.operation });
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="App d-flex">
        <Display result={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
