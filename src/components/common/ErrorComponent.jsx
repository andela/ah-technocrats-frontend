import React from 'react';

const Errors = props => (
  props.field.map(err => (<div className="errorMessage"><small className="error">{err}</small></div>))
);

export default Errors;
