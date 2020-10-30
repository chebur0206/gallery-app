import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from './pages/Users';
import Albums from './pages/Albums';
import Gallery from './pages/Gallery';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' exact component={Users} />
          <Route path='/users/:userId/albums' exact component={Albums} />
          <Route path='/users/:userId/albums/:albumId' component={Gallery} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
