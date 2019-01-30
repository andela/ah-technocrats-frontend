import React from 'react';
import PropTypes from 'prop-types';
import { SemanticToastContainer, toast } from 'react-semantic-toasts';
import 'react-semantic-toasts/styles/react-semantic-alert.css';

const SessionExpiredComponent = (props) => {
  const { requestStatus, history } = props;
  return (
    <React.Fragment>
      <SemanticToastContainer position="top-left">
        { requestStatus.status ? toast({
          type: 'warning',
          icon: 'exclamation triangle',
          description: requestStatus.message,
          time: 3000,
          onClose: () => {
            history.push('/login');
          },
        }) : null }
      </SemanticToastContainer>
    </React.Fragment>
  );
};

SessionExpiredComponent.propTypes = {
  requestStatus: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};


export default SessionExpiredComponent;
