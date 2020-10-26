import React, { useState, createContext, useContext} from 'react'

const SignContext = createContext ({
    signedUp: false,
    login: () => { },
})

export const UseSignContext = () => useContext(SignContext)

const SignContextProvider = (props) => {
    const [isSignedUp, setIsSignedUp] = useState(false)

    const loginHandler = () => {
        setIsSignedUp(true)
    }
    
    return (
        <SignContext.Provider value={{
            login: loginHandler,
            signedUp: isSignedUp,
        }}
        >
            {props.children}
        </SignContext.Provider>
    )
}

export default SignContextProvider