import React from 'react';

const buttonBasicStyle = {
  padding: 10,
  border: 'none',
  borderRadius: 3,
  margin: "10px 10px 10px 0",
  color: '#fff'
}

const Button = props => {
  return (
    <button id={props.id} style={{...buttonBasicStyle, ...props.color}} onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button;
