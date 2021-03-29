import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import FirebaseInit from '../../../commonComponents/FirebaseInit';
import Home from './home';
import Test from './test';

interface Props{
    name?:string
}

function App(props:Props) {
    FirebaseInit()

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