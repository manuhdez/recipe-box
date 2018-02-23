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
      isModalOpen: false,
      modalTitle: "",
      modalBtnText: "Add recipe",
      inputRecipe: "",
      inputIngredients: "",
      currentRecipe: ""
    }
  }

  handleChange(event) {
    const itemChanged = event.target.name;
    if (itemChanged === "inputRecipe") {
      this.setState({inputRecipe: event.target.value})
    } else if (itemChanged === "inputIngredients") {
      const ingredientsArray = event.target.value.split(',');
      this.setState({inputIngredients: ingredientsArray})
    }
  }

  openModal(e) {
    const text = e.target.innerHTML;
    const editIndex = parseInt(e.target.id);

    if (text === "Add recipe") {
      this.setState({
        isModalOpen: true,
        modalTitle: "Add a recipe",
        modalBtnText: text
      })
    } else if (text === "Edit") {
      let inputTitle = this.state.recipes[editIndex].title;
      let inputContent = this.state.recipes[editIndex].ingredients.join(',');
      this.setState({
        isModalOpen: true,
        modalTitle: "Edit recipe",
        modalBtnText: "Save changes",
        inputRecipe: inputTitle,
        inputIngredients: inputContent,
        currentRecipe: editIndex
      })
    }
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
      inputRecipe: "",
      inputIngredients: ""
    })
    console.log('Modal is closed')
  }

  render() {
    return (
    <div>
      <RecipesList recipes={defaultRecipes} handleOpen={this.openModal.bind(this)} />
      <Modal modalTitle="Add recipe" btnText={this.state.modalBtnText} handleClose={this.closeModal.bind(this)} isModalOpen={this.state.isModalOpen}/>
    </div>
    );
  }
}
