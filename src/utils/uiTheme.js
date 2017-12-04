import React, { Component } from 'react';

import {teal900, 
    cyan700, cyan500, 
    white, darkBlack, fullBlack,
    pinkA200, 
    grey100, grey300, grey400, grey500,} from 'material-ui/styles/colors';
// import {fade}                            from 'material-ui/src/styles/colorManipulator';


// Material-ui custom themes
export default {
    fontFamily: 'Monserrat, sans-serif',
    palette: {
      primary1Color: teal900,
      primary2Color: cyan700,
      primary3Color: grey400,
      accent1Color: pinkA200,
      accent2Color: grey100,
      accent3Color: grey500,
      textColor: teal900,
      alternateTextColor: white,
      canvasColor: white,
      borderColor: grey300,
    //   disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
    //   clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
    },
  textField: {
      'width': '100%'
    }
  };
  