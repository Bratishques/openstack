import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import FirebaseInit from '../../../commonComponents/FirebaseInit';
import { LoginModalContextProvider } from '../context/loginModalContext';
import LoginLayout from '../layout/layout';
import Home from './home';
import Test from './test';

interface Props{
    name?:string
}

function App(props:Props) {
    FirebaseInit()

    return (
        <>
        <LoginModalContextProvider>
            <LoginLayout>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/test" exact component={Test}/>
                </Switch>
            </LoginLayout>
        </LoginModalContextProvider>
        </>
    );
}

export default App;