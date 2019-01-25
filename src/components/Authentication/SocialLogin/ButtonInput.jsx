import React from 'react';
import PropTypes from 'prop-types';


const ButtonInput = (props) => {
  const {
    provider, providerName, type, className, buttonClass,
    getSocialData,
  } = props;
  return (
    <button
      type="button"
      className={`ui button ${buttonClass}`}
      onClick={() => getSocialData(provider, providerName, type)}
    >
      <i className={`${className} icon`} />
    </button>
  );
};
ButtonInput.propTypes = {
  provider: PropTypes.string,
  providerName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  getSocialData: PropTypes.func.isRequired,
};

ButtonInput.defaultProps = {
  provider: null,
};
export default ButtonInput;
