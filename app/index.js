import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButtonExampleSimple from './components/FlatButtonExampleSimple';
import RaisedButtonMain from './components/RaisedButtonExampleSimple';

const App = () => (
  <MuiThemeProvider>
    <RaisedButtonMain />
    <FlatButtonExampleSimple />
  </MuiThemeProvider>
  );

  ReactDOM.render(
    <App />,
    document.getElementById('react_section-elements')
  );

