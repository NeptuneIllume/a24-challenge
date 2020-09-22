import React from 'react';
import { Box } from '@chakra-ui/core';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';

function App() {
  return (
    <Switch>
      <Box maxW="1280px" mx="auto" p={6}>
        <Header />
        <Route path="/movie/:id">
          <Movie />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Box>
    </Switch>
  );
}

export default App;
