import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="custome-modal">
          <h2 className="header-text" style={{textAlign: "center"}}>Create Customer</h2>
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.onClose} className="btn btn-secondary close-btn-custome">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;