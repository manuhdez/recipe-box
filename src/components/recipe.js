import Button from './src/components/button';

export default const Recipe = props => {
  return (
    <details id={props.id}>
      <summary>{props.title}</summary>
      <header>
        <h2>Ingredients</h2>
      </header>
      <ul>
        {
          props.ingredients.map( item => { return <li>{item}</li> })
        }
      </ul>
      <Button text="Delete" handleClick={props.handleRemove} />
      <Button text="Edit" handleClick={props.handleEditRecipe} />
    </details>
  )
}
