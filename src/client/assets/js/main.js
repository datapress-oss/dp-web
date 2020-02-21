// This is the entry file, where all npm modules are imported

// Jquery itself needs to be imported in a separate js file
import './import-jquery.js'

// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' // Import precompiled Bootstrap css

// import custome designs
import './../scss/bundle.scss'
import './../scss/homepage.scss'
// darkTheme
import Darkmode from 'darkmode-js';
var options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
new Darkmode().showWidget();
import './../scss/darkTheme.scss'
// import FontAwesome icon-pack
import '@fortawesome/fontawesome-free/css/all.css'
