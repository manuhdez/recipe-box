import React, { Component } from 'react';
import Recipe from './recipe';
import Button from './button';

export default class RecipesList extends Component {
  render() {
    return (
      <div>
        {
          this.props.recipes.map( (recipe, index) => { return <Recipe id={index} key={index} title={recipe.title} ingredients={recipe.ingredients}
          handleEditRecipe={this.props.handleEditRecipe} handleRemove={this.props.handleRemove} handleClick={this.props.handleOpen} /> })
        }
        <Button id="add-recipe-btn" text="Add recipe" color={{background: "#337ab7"}} handleClick={this.props.handleOpen} />
      </div>
    )
  }
}
