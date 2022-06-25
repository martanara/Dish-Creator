import React from 'react';

import clsx from 'clsx';

import styles from './PageSubtitle.module.scss';

import PropTypes from 'prop-types';

const PageSubtitle = (props) => {
  return (
    <p className={clsx(styles.subtitle, props.addMargin && styles.addMargin)}>{props.children}</p>
  );
};

PageSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
  addMargin: PropTypes.bool,
};

export default PageSubtitle;