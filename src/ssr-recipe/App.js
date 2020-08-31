import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './ssr-recipe/components/Menu';
import RedPage from './ssr-recipe/pages/RedPage';
import BluePage from './ssr-recipe/pages/BluePage';

const App = () => {
  //
  return (
    <div>
      <Menu />
      <hr />
      <Route path='/red' component={RedPage} />
      <Route path='/blue' component={BluePage} />
    </div>
  );
};

export default App;