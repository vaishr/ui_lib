import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButtonExampleSimple from './components/FlatButtonExampleSimple';
import RaisedButtonExampleSimple from './components/RaisedButtonExampleSimple';

const App = () => (
  <MuiThemeProvider>
    <FlatButtonExampleSimple />
    <RaisedButtonExampleSimple />
  </MuiThemeProvider>
  );

  ReactDOM.render(
    <App />,
    document.getElementById('react_section-styles')
  );

