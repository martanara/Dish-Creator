import React from 'react';

import PageTitle from '../PageTitle/PageTitle';
import PageSubtitle from '../PageSubtitle/PageSubtitle';

import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <PageTitle>dish Creator</PageTitle>
      <PageSubtitle>Add your dish from the form below</PageSubtitle>
      <img alt='fyring pan with scrambled eggs' src='inky-cooking-scrambled-egg-in-a-pan-1.png'/>
    </div>
  )
};

export default Hero;
