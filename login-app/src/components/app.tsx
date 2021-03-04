import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './home';

interface Props{
    name?:string
}

function App(props:Props) {

    return (
        <>
        <Switch>
            <Route path="/" component={Home} />
            <Route/>
        </Switch>
        </>
    );
}

export default App;