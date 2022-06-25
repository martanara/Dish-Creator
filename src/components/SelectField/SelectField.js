import React from 'react';

import styles from './SelectField.module.scss';

import PropTypes from 'prop-types';

const SelectField = (props) => {
  return (
    <select onChange={props.onChange} className={styles.select} value={props.value}>
      {props.options.map((option) => 
        (
          <option key={option} value={option}>{option}</option>
        )
      )};
    </select>
  );
};

SelectField.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectField;