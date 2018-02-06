import React, { Component } from 'react';

const Button = props => {
  return (
    <button style={props.style} onClick={props.handleClick}>{props.text}</button>
  )
}

export default Button;
