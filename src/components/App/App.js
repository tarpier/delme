import React from 'react';
import { Router } from '@reach/router';

import Home from '../../pages/Home';
import Chars from '../../pages/CharacterPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <Chars path="chars" />
      </Router>
    );
  }
}

export default App;
