import React from 'react';
import Button from './button';

export default class Modal extends React.Component {
  render() {
    if (this.props.isOpen === false)
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
      <div modalState={this.props.modalState}>
        <div style={modalStyle} className="modal">
          <h3>{this.props.modalTitle}</h3>
          <Button text={this.props.buttonOption} color={{background: 'blue'}} />
          <Button text="Cancel" color={{background: 'red'}}/>
        </div>
        <div style={backdropStyle} onClick={this.props.handleClose} />
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.modalState) {
      this.props.handleClose(e)
    }
  }
}
