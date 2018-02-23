import React from 'react';
import Button from './button';

export default class Modal extends React.Component {
  render() {
    if (this.props.isModalOpen === false)
      return null

    let modalStyle = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '9999',
          background: '#fff'
        }

    let backdropStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '9998',
      background: 'rgba(0,0,0,0.3)'
    }

    return (
      <div isModalOpen={this.props.isModalOpen}>
        <div style={modalStyle} className="modal">
          <h2>{this.props.modalTitle}</h2><a href="#" onClick={this.props.handleClose}>x</a>
          <form>
            <label>Recipe name
              <input type='text' name="inputRecipe"
                value={this.props.inputRecipe}
                onChange={this.props.handleChange}/>
            </label>
            <label>Ingredients
              <textarea name="inputIngredients"
                onChange={this.props.handleChange}
                value={this.props.inputIngredients}/>
            </label>
          </form>
          <Button text={this.props.btnText} color={{background: '#337ab7'}} />
          <Button text="Cancel" color={{background: '#d9534f'}}/>
        </div>
        <div style={backdropStyle} onClick={this.props.handleClose} />
      </div>
    )
  }
}
