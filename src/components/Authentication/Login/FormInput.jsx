import React from 'react';
import PropTypes from 'prop-types';

const FormInput = (props) => {
  const {
    htmlFor, fieldType, inputName, placeholder, onChange, fieldName, id,
  } = props;

  return (
    <div className="field">
      <label className="form-label" htmlFor={htmlFor}>
        {fieldName}
        <input
          type={fieldType}
          onChange={onChange}
          name={inputName}
          placeholder={placeholder}
          id={id}
        />
      </label>
    </div>
  );
};

FormInput.propTypes = {
  fieldType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
