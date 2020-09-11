import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleTable from './SimpleTable';
import Selection_and_sorting from './Selection_and_sorting';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Selection_and_sorting />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
