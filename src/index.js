import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Books from './components/Books';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Books />, document.getElementById('root'));
serviceWorker.unregister();
