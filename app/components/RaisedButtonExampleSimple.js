import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';

const styleLarge = {
  margin: 12,
  height: 48,
  borderRadius: 8
};

const styleMedium = {
  margin: 12,
  height: 36,
  borderRadius: 8
}

const styleSmall = {
  margin: 12,
  height: 32,
  borderRadius: 8
}

const styleLargeOutline = {
  margin: 12,
  height: 52,
  borderRadius: 8
};

const styleMediumOutline = {
  margin: 12,
  height: 42,
  borderRadius: 8
}

const styleSmallOutline = {
  margin: 12,
  height: 37,
  borderRadius: 8
}

const RaisedButtonMain = () => (
  <div>
    <h3 className="section-subtitle">CTA Raised Buttons</h3>
     <RaisedButton className="underlineHoverButton"
      buttonStyle={{borderRadius:8}}
      label="Select"
      labelStyle={{textTransform: "none"}}
      labelColor="#ffffff"
      backgroundColor="#006600"
      icon={<Lock />}
      style={styleLarge}
    />
    <RaisedButton className="underlineHoverButton"
      buttonStyle={{borderRadius:8}}
      label="Select"
      labelStyle={{textTransform: "none"}}
      labelColor="#ffffff"
      backgroundColor="#006600"
      icon={<Lock />}
      style={styleMedium}
    />
    <RaisedButton className="underlineHoverButton"
      buttonStyle={{borderRadius:8}}
      label="Select"
      labelStyle={{textTransform: "none"}}
      labelColor="#ffffff"
      backgroundColor="#006600"
      icon={<Lock />}
      style={styleSmall}
    />    
    <br />
    <pre>Code for Raised Buttons goes here</pre>
  </div>
);

export default RaisedButtonMain;
