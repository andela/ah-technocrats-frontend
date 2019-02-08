import React from 'react';

const commonResetForgot = (error, reason) => {
  if (error) {
    return (
      <p className="error">
        {error}
      </p>
    );
  }
  return reason ? (
    <p className="error">
      {reason}
    </p>
  ) : '';
};

export default commonResetForgot;
