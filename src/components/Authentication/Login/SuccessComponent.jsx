import React from 'react';
import PropTypes from 'prop-types';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const SuccessComponent = ({ success, reset = null, message = null }) => (
  <div>
    <SemanticToastContainer position="top-left">
      { success ? toast({
        type: 'success',
        icon: 'check',
        description: message || success,
        time: 3000,
        onClose: () => (reset ? reset(false) : null),
      }) : null }

    </SemanticToastContainer>
  </div>
);

SuccessComponent.propTypes = {
  success: PropTypes.bool,
  reset: PropTypes.string,
  message: PropTypes.string,
};
SuccessComponent.defaultProps = {
  success: null,
  reset: null,
  message: null,
};


export default SuccessComponent;
