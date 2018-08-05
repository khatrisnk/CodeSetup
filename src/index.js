// import test from './test';
// import img from './assets/image.png';
// import './styles/main.scss';
// import "babel-polyfill";


// console.log(img);
// console.log(test);
// console.log('Hello Siddhartha !!!');

//============================================//
// import "babel-polyfill";
// import React from "react";
// import ReactDOM from "react-dom";

// import App from './components/App';

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );

/** ============ */
import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { reducers } from './reducers/index';
import {store} from './store';

import './styles/main.scss';
import App from './containers/App';

// let store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);