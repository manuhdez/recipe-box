import React, { Component } from 'react';
import Button from './button.js';

export default class Recipe extends Component {
  render() {
    return (
      <details id={this.props.id}>
        <summary>{this.props.title}</summary>
        <header>
          <h2>Ingredients</h2>
        </header>
        <ul>
          {
            this.props.ingredients.map( item => {return <li>{item}</li> })
          }
        </ul>
        <Button text="Delete" handleClick={this.props.handleRemove} />
        <Button text="Edit" handleClick={this.props.handleEditRecipe} />
      </details>
    )
  }
}
