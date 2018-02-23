import React, { Component } from 'react';
import Button from './button.js';

export default class Recipe extends Component {
  render() {
    return (
      <details>
        <summary>{this.props.title}</summary>
        <header>
          <h2>Ingredients</h2>
        </header>
        <ul>
          {
            this.props.ingredients.map( (item, key) => {return <li key={key}>{item}</li> })
          }
        </ul>
        <Button id={this.props.id} color={{background: "#d9534f" }} text="Delete" handleClick={this.props.handleRemove} />
        <Button id={this.props.id} color={{background: "#ddd" }} text="Edit" handleClick={this.props.handleClick} />
      </details>
    )
  }
}
