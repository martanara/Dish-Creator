import React from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = (props) => {
  return (<button className={styles.button} type={props.type} onClick={props.onClick}>{props.children}</button>);
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

export default Button;
