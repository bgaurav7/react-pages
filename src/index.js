import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import PageRouter from './pages/router'

ReactDOM.render(<PageRouter />, document.getElementById('root'));
registerServiceWorker();
