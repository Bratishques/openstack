import * as React from 'react';
import LoginModalContext from '../context/loginModalContext';

const LoginHeader = () => {
    const {setModalOpen} = React.useContext(LoginModalContext)
    return (
        <div className={`fixed z-10 w-full px-8 py-4 flex justify-between items-center`}>
            <div>
                Open Stack
            </div>
            <div>
                <button 
                onClick={setModalOpen}
                className={`px-2 py-3`}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginHeader