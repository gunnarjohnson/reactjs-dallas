import React from 'react';
import ReactDOM from 'react-dom';
require('es6-promise').polyfill();
import ReactJSDallas from './components/ReactJSDallas';
import './styles/styles.css';

ReactDOM.render(<ReactJSDallas />, document.getElementById('app'));