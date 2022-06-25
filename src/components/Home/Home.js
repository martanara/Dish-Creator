import React from 'react';

import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Hero from '../Hero/Hero';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
