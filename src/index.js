import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
