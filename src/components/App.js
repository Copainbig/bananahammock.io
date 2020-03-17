import { hot } from 'react-hot-loader';
import React from 'react'
import PropTypes from 'prop-types';

import WelcomeLogo from './WelcomeLogo';

const App = () => <div data-testid="app-div"><WelcomeLogo /></div>; 

App.propTypes = { 
  message: PropTypes.string 
}; 

export default hot(module)(App);