import { useContext } from "react";
import { useRef, useState } from "react";
import AuthContext from "../../components/store/auth-context";
import classes from './login.module.css';


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
                        authCntxt.login(data.idToken)
                        setLogin(true);
                        localStorage.setItem('email', data.email)
                       
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
        <div className={classes.logincontainer}>
            <div className={classes.loginhead}>Login</div>
            <form  onSubmit={submitHandler}>
                <label className={classes.loginlabel}>Your Email : </label>
                <input className={classes.input} type='email' id='emailId' ref={emailInputRef} required></input>
                <label className={classes.loginlabel}>Your Password : </label>
                <input className={classes.input} type='password' id='passwordId' minLength='7' ref={passwordInputRef} required></input>
                <button className={classes.loginbutton}>Login</button>
            </form>
        </div>
    )
};
export default Login;