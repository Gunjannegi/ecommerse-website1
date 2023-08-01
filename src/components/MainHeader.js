
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Cart from './Cart/Cart';
import classes from './MainHeader.module.css';
import AuthContext from "./store/auth-context";
const MainHeader = () => {
    const authCntxt = useContext(AuthContext);
    const [store, setStore] = useState(false);
    useEffect(() => {
        if (authCntxt.isLoggedIn) {
            setStore(true);
        }
    }, [authCntxt.isLoggedIn])
    
    const showCart = () => {
        setStore(true);
    }
    const hideCart = () => {
        setStore(false)
    }
    const logoutHandler = () => {
        authCntxt.logout()
        setStore(false)
    }
    return (
        <header>
            <Navbar bg="dark" expand="sm" variant="dark">
                <div className={classes.main}>
                <Nav>
                    <span>
                            <NavLink to='/Home' className={classes.p} onClick={hideCart}> Home</NavLink></span>
                        <span>
                            <NavLink to='/Store' className={classes.p} onClick={showCart}> Store</NavLink></span>
                    <span>
                            <NavLink to='/About' className={classes.p} onClick={hideCart}> About</NavLink></span>
                        <span>
                            {!authCntxt.isLoggedIn && <NavLink to='/Login' className={classes.p} >Login</NavLink>}
                            {authCntxt.isLoggedIn && <div type='button' onClick={logoutHandler} className={classes.p}>Logout</div>}
                    </span>
                    <span>
                            <NavLink to='/Contact' className={classes.p} onClick={hideCart}>Contact Us</NavLink>
                    </span>
                    </Nav>
                </div>
                <div className={classes.c}>
                    {store && authCntxt.isLoggedIn && < Cart />}
                    </div>
               
            </Navbar>
        </header>
    )
};
export default MainHeader;