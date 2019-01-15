/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'semantic-ui-react';

const FormField = ({
  onChange, inputName, error, type,
}) => {
  const convertToUpperCase = string => string.replace(/^[a-z]/, x => x.toUpperCase());
  const dataTestAttr = string => `${string}-error`;

  return (
    <Form.Field>
      <label htmlFor={inputName}>
        {convertToUpperCase(inputName)}
        <Input
          onChange={onChange}
          type={type}
          name={inputName}
          placeholder={convertToUpperCase(inputName)}
          id={inputName}
        />
      </label>
      {error[inputName] ? error[inputName].map(err => (
        <small key={inputName} data-test={dataTestAttr(inputName)} id={inputName} className="error">{err}</small>
      )) : null}
    </Form.Field>
  );
};

FormField.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputName: PropTypes.string.isRequired,
  error: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
