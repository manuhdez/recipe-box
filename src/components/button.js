export default const Button = props => {
  return (
    <button style={props.style} onClick={props.handleClick}>{props.text}</button>
  )
}
