import React from 'react';
import ReactDOM from 'react-dom';

import Demo from './components/Demo';

function init() {
  ReactDOM.render(<Demo />, document.getElementById('root'));
}

window.onload = init;
