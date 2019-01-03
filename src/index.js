import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './client/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();