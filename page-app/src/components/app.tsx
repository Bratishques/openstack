import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home';
import Test from './test';

interface Props{
    name?:string
}

function App(props:Props) {

    return (
        <>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/test" exact component={Test}/>
        </Switch>
        </>
    );
}

export default App;