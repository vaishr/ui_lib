import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import Email from 'material-ui/svg-icons/communication/email';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Search from 'material-ui/svg-icons/action/search';

const style = {
  margin: 12,
  height: 50,
  borderRadius: 8
};

const RaisedButtonExampleSimple = () => (
  <div>
    <h3 className="section-subtitle">Raised Buttons</h3>
     <RaisedButton
      buttonStyle={{borderRadius:8}}
      label="Make a Payment"
      labelColor="#ffffff"
      backgroundColor="#006600"
      icon={<Lock />}
      style={style}
    />
    <RaisedButton 
      buttonStyle={{borderRadius:8}}
      label="Value" 
      labelColor="#ffffff"
      backgroundColor="#0070AA"
      style={style} />
    <RaisedButton
      buttonStyle={{borderRadius:8}}
      labelColor="#ffffff"
      backgroundColor="#0070AA"
      icon={<Email />}
      style={style}
    />
      <RaisedButton
      buttonStyle={{borderRadius:8}}
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