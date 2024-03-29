import React from 'react';
import { useState } from 'react';
const AuthContext = React.createContext({
    token : '',
    login: (token) => { },
    logout: () => { }
});
export const AuthProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token, setToken] = useState(initialToken)
    const userIsLoggedIn = !!token;
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token)
    };
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }

    const authContext = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login : loginHandler,
        logout : logoutHandler
    }
    return <AuthContext.Provider value={authContext}>{props.children}</AuthContext.Provider>
}
export default AuthContext;