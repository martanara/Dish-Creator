import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Container from '../src/components/Container/Container';
import Home from '../src/components/Home/Home';
import NotFound from '../src/components/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

export default App;
