import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Email from 'material-ui/svg-icons/communication/email';
import RightArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import Search from 'material-ui/svg-icons/action/search';

const styleLarge = {
  margin: 12,
  height: 48,
  lineHeight: '48px',
  borderRadius: 8
};

const styleMedium = {
  margin: 12,
  height: 36,
  lineHeight: '36px',
  borderRadius: 8
}

const styleSmall = {
  margin: 12,
  height: 32,
  lineHeight: '32px',
  borderRadius: 8
}

const FlatButtonExampleSimple = () => (
  <div>
  	<h3 className="section-subtitle">Flat Buttons</h3>
    <FlatButton className="underlineHoverButton"
    	 label="Value"
    	 labelStyle={{color:"#ffffff", textTransform: "none"}}
    	 backgroundColor="#0070AA"
    	 hoverColor="#0090DB"
    	 style={styleLarge}
    />
     <FlatButton className="underlineHoverButton"
    	 label="Value"
    	 labelStyle={{color:"#ffffff", textTransform: "none"}}
    	 backgroundColor="#0070AA"
    	 hoverColor="#0090DB"
    	 style={styleMedium}
    />
     <FlatButton className="underlineHoverButton"
    	 label="Value"
    	 labelStyle={{color:"#ffffff", textTransform: "none"}}
    	 backgroundColor="#0070AA"
    	 hoverColor="#0090DB"
    	 style={styleSmall}
    />
    < br />
    <FlatButton className="fillHoverButton"
    	 label="Value"
    	 labelStyle={{color:"#0070AA", textTransform: "none"}}
    	 backgroundColor="transparent"
    	 hoverColor="#0070AA"
    	 style={styleLarge}
    />
    <FlatButton className="fillHoverButton"
    	 label="Value"
    	 labelStyle={{color:"#0070AA", textTransform: "none"}}
    	 backgroundColor="transparent"
    	 hoverColor="#0070AA"
    	 style={styleMedium}
    />
    <FlatButton className="fillHoverButton"
    	 label="Value"
    	 labelStyle={{color:"#0070AA", textTransform: "none"}}
    	 backgroundColor="transparent"
    	 hoverColor="#0070AA"
    	 style={styleSmall}
    />
    <br />
     <FlatButton className="roundedButton"
    	 backgroundColor="#0070AA"
    	 hoverColor="#0090DB"
    	 style={styleLarge}
    	 icon={<Email color={"#ffffff"}/>}
    />
    <FlatButton className="roundedButton"
    	 backgroundColor="#0070AA"
    	 hoverColor="#0090DB"
    	 style={styleMedium}
    	 icon={<Email color={"#ffffff"}/>}
    />
    <FlatButton className="roundedButton"
    	 backgroundColor="#0070AA"
    	 hoverColor="#0090DB"
    	 style={styleSmall}
    	 icon={<Email color={"#ffffff"}/>}
    />
    <pre>Code goes here</pre>
  </div>
);

export default FlatButtonExampleSimple;
