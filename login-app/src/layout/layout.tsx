import * as React from 'react';
import LoginHeader from './header';
import LoginModal from './loginModal';

interface Props{
    children: React.ReactNode
}

const LoginLayout = ({children}:Props) => {
    return (
        <div>
            <LoginModal/>
            <LoginHeader/>
            <div className={`h-20 w-full`}></div>
            {children}
        </div>
    )
}

export default LoginLayout