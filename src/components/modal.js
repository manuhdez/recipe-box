import React from 'react';

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <div style={modalStyle} className="modal">{this.props.children}</div>
        <div style={backdropStyle} onClick={e => this.close(e)} />
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}
