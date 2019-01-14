import React from 'react';
import PropTypes from 'prop-types';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const SuccessComponent = ({ success }) => (
  <div>
    <SemanticToastContainer position="top-left">
      { success ? toast({
        type: 'success',
        icon: 'check',
        description: success,
        time: 3000,
      }) : null }

    </SemanticToastContainer>
  </div>
);

SuccessComponent.propTypes = {
  success: PropTypes.bool,
};
SuccessComponent.defaultProps = { success: null };

export default SuccessComponent;
