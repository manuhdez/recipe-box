import React, { Component } from 'react';

const buttonBasicStyle = {
  padding: 10,
  border: 'none',
  borderRadius: 3,
  color: '#fff'
}

const Button = props => {
  return (
    <button style={{...buttonBasicStyle, ...props.color}} onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button;
