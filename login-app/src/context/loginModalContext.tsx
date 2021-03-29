import * as React from 'react';

const LoginModalContext = React.createContext({
    modalOpen: false,
    setModalOpen: () => {

    }
})

interface Props {
    children: React.ReactNode;
  }

export const LoginModalContextProvider = ({children}:Props) => {
    const [modalOpen, setModalOpen] = React.useState(false)

    const openModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <LoginModalContext.Provider value={{
            modalOpen: modalOpen,
            setModalOpen: openModal
        }}>
            {children}
        </LoginModalContext.Provider>
    )
}

export default LoginModalContext