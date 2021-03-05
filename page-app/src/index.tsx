import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Redux from "redux";
import { Provider as ReduxProvider } from "react-redux";
import App from './components/app';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { changeTitle } from '../../redux/reducers/title';
import './global.css'


const rootEl = document.getElementById('app');
const preloadedState = (window as any)["__PRELOADED_STATE__"];
const store = Redux.createStore(changeTitle, preloadedState)

ReactDOM.hydrate(
    <ReduxProvider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </ReduxProvider>
    
    , rootEl);
