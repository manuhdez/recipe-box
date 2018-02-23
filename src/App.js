import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipesList from './components/recipelist';
import Modal from './components/modal';

const defaultRecipes = [
  {title: 'Pumpkin Pie', ingredients: ['Pumpkin puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']},
  {title: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
  {title: 'Onion Pie', ingredients: ['Onion', 'Pie Crust']}
];


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: defaultRecipes,
      isModalOpen: true,
      modalBtnText: "Add recipe"
    }
  }

  closeModal(){
    this.setState({isModalOpen: false})
    console.log('Modal is closed')
  }

  render() {
    return (
    <div>
      <RecipesList recipes={defaultRecipes} />
      <Modal modalTitle="Add recipe" btnText={this.state.modalBtnText} handleClose={this.closeModal.bind(this)} isModalOpen={this.state.isModalOpen}/>
    </div>
    );
  }
}
