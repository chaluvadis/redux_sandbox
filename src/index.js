import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppRedux from './AppRedux';

import './index.css';

ReactDOM.render(
  <div>
    <p>
      <label className="label"> With out Redux</label>
      <App />
    </p>
    <p>
      <label className="label"> With Redux</label>
      <AppRedux />
    </p>
  </div>,
  document.getElementById('root')
);
