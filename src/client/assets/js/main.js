// This is the entry file, where all npm modules are imported

// Jquery itself needs to be imported in a separate js file
import './import-jquery.js'

// import bootstrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' // Import precompiled Bootstrap css

// import custome designs
import './../scss/bundle.scss'
import './../scss/homepage.scss'
// darkTheme can only be set manually here for now, delete comment below to activate it
// import './../scss/darkTheme.scss'

// import FontAwesome icon-pack
import '@fortawesome/fontawesome-free/css/all.css'
