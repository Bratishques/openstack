import * as React from 'react';
import LoginModalContext from '../context/loginModalContext';
import firebase from "firebase"
import { googleProvider } from '../../../commonComponents/FirebaseInit';

const LoginModal = () => {
    const loginWithGoogle = async () => {
       const result = await firebase.auth().signInWithPopup(googleProvider)
       console.log(result)
       const credential = result.credential
       console.log(credential)
    }
    const { modalOpen, setModalOpen } = React.useContext(LoginModalContext)
    return (
        <>
            <div className={`fixed ${!modalOpen ? "hidden" : ""} h-screen w-full z-20 bg-black bg-opacity-25 flex items-center justify-center`}>

                <div className={`z-30 relative ${!modalOpen ? "hidden" : ""} opacity-100 text-black bg-white px-8 py-4 flex flex-col items-center rounded-2xl`}>
                    <div className={` flex justify-between items-center mb-4`}>
                        <div className={`mr-4`}>
                            Login using...
                            </div>
                        <button className={`border border-blue-600 rounded-md text-blue-600 px-2 py-1`} onClick={setModalOpen}>
                            Close
                        </button>
                    </div>
                    <button onClick={() => {
                        loginWithGoogle()
                    }} className={`w-full border py-1 border-green-600 rounded-md text-green-600 `}>
                    Google
                    </button>
                </div>
            </div>
            

        </>

    )
}

export default LoginModal