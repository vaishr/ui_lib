import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import Email from 'material-ui/svg-icons/communication/email';
import LeftArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Search from 'material-ui/svg-icons/action/search';

const style = {
  margin: 12,
  height: 50
};

const RaisedButtonExampleSimple = () => (
  <div>
    <h3 className="section-subtitle">Raised Buttons</h3>
     <RaisedButton
      label="Make a Payment"
      labelColor="#ffffff"
      backgroundColor="#006600"
      icon={<Lock />}
      style={style}
    />
    <RaisedButton 
      label="Value" 
      labelColor="#ffffff"
      backgroundColor="#0070AA"
      style={style} />
    <RaisedButton
      labelColor="#ffffff"
      backgroundColor="#0070AA"
      icon={<Email />}
      style={style}
    />
      <RaisedButton
      icon={<Search />}
      label="Value"
      labelColor="#ffffff"
      backgroundColor="#0070AA"
      style={style}
    />
    <br />
    <br />
    <pre>Code for Raised Buttons goes here</pre>
  </div>
);

export default RaisedButtonExampleSimple;