import React, { Component } from 'react';
import Recipe from './recipe';

export default class RecipesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.recipes.map( (recipe, index) => { return <Recipe title={recipe.title} ingredients={recipe.ingredients} /> })
        }
      </div>
    )
  }
}
