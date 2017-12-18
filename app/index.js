import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButtonExampleSimple from './components/FlatButtonExampleSimple';

const App = () => (
  <MuiThemeProvider>
    <FlatButtonExampleSimple />
  </MuiThemeProvider>
  );

  ReactDOM.render(
    <App />,
    document.getElementById('react_section-styles')
  );

