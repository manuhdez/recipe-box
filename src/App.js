import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipesList from './components/recipelist'

const defaultRecipes = [
  {title: 'Pumpkin Pie', ingredients: ['Pumpkin puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']},
  {title: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
  {title: 'Onion Pie', ingredients: ['Onion', 'Pie Crust']}
];


export default class App extends React.Component {
  render() {
    return (
      <RecipesList recipes={defaultRecipes} />
    );
  }
}
