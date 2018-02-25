import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecipesList from './components/recipelist';
import Modal from './components/modal';

let recipes = [
  {title: 'Pumpkin Pie', ingredients: ['Pumpkin puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']},
  {title: 'Spaghetti', ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']},
  {title: 'Onion Pie', ingredients: ['Onion', 'Pie Crust']}
];

let defaultRecipes = JSON.parse(localStorage.getItem("defaultRecipes"));
if (defaultRecipes == null) {
  localStorage.setItem("defaultRecipes", JSON.stringify(recipes));
  let defaultRecipes = JSON.parse(localStorage.getItem("defaultRecipes"));
}


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: defaultRecipes,
      isModalOpen: false,
      modalTitle: "",
      modalBtnText: "",
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
    const editIndex = parseInt(e.target.id, "decimal");

    if (text === "Add recipe") {
      this.setState({
        isModalOpen: true,
        modalTitle: "Add new recipe",
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
  }

  removeRecipe(e) {
    let recipesCopy = this.state.recipes.slice();
    const recipeIndex = parseInt(e.target.id, "decimal");
    recipesCopy.splice(recipeIndex, 1);

    recipes = recipesCopy;
    localStorage.setItem("defaultRecipes", JSON.stringify(recipesCopy))
    this.setState({recipes: recipes})
  }

  modifyRecipesList() {
    const currentRecipe = this.state.currentRecipe;

    if (this.state.modalBtnText === "Save changes") {
      const recipesCopy = this.state.recipes.slice();
      let newRecipe = {};
      newRecipe.title = this.state.inputRecipe
      newRecipe.ingredients = this.state.inputIngredients
      recipesCopy[currentRecipe] = newRecipe
      recipes = recipesCopy;
      localStorage.setItem("defaultRecipes", JSON.stringify(recipesCopy))
      this.setState({recipes: recipes, currentRecipe: ""})
      this.closeModal();

    } else if (this.state.modalTitle === "Add new recipe") {
      const recipesCopy = this.state.recipes.slice();
      recipesCopy.push({title: this.state.inputRecipe, ingredients: this.state.inputIngredients})
      recipes = recipesCopy;
      localStorage.setItem("defaultRecipes", JSON.stringify(recipesCopy))
      if (this.state.inputRecipe !== "") {
        this.setState({recipes: recipesCopy})
        this.closeModal();
      }
    }
  }

  render() {
    return (
    <div>
      <RecipesList
        recipes={this.state.recipes}
        handleOpen={this.openModal.bind(this)}
        handleRemove={this.removeRecipe.bind(this)}
      />
      <Modal
        modalTitle={this.state.modalTitle}
        btnText={this.state.modalBtnText}
        inputRecipe={this.state.inputRecipe}
        inputIngredients={this.state.inputIngredients}
        handleClose={this.closeModal.bind(this)}
        handleChange={this.handleChange.bind(this)}
        handleRecipes={this.modifyRecipesList.bind(this)}
        isModalOpen={this.state.isModalOpen}
      />
    </div>
    );
  }
}
