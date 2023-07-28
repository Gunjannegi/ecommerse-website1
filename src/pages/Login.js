import { Fragment, useContext } from "react";
import { useRef, useState } from "react";
import AuthContext from "../components/store/auth-context";

const Login = () => {
    const [login, setLogin] = useState(false);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCntxt = useContext(AuthContext);
  

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        if (!login) {
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjwFewTFtQkZaWXn-A2suzXqE3BZHDZRI', {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        console.log(data)
                        authCntxt.login(data.idToken)
                        setLogin(true);
                    })

                } else {
                    res.json().then(data => {
                        let errorMessage = 'Authentication failed';
                        if (data && data.error && data.error.message) {
                            errorMessage = data.error.message;
                        }
                        alert(errorMessage);
                    })
                }
            })

        }
    }
    return (
        <Fragment>
        <h1>Login</h1>
        <form onSubmit={submitHandler}>
            <label>Your Email</label>
            <input type='email' id='emailId' ref={emailInputRef} required></input>
            <label>Your Password</label>
            <input type='password' id='passwordId' minLength='7' ref={passwordInputRef} required></input>
            <button>Login</button>
            </form>
        </Fragment>
    )
};
export default Login;