import React from 'react';

import styles from './InputField.module.scss';

import PropTypes from 'prop-types';

const InputField = (props) => {
  return (
    <input 
      className={styles.input} 
      required 
      value={props.value} 
      onChange={props.onChange} 
      placeholder={props.placeholder} 
      type={props.type} 
      min={props.min}
      max={props.max}
      step={props.step}
    />
  );
};

InputField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
};

export default InputField;