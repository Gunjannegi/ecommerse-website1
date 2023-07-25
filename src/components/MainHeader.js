import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import Cart from './Cart/Cart';
import classes from './MainHeader.module.css';
const MainHeader = () => {
    return (
        <header>
            <Navbar bg="dark" expand="sm" variant="dark">
            <Nav>
                <span>
                        <NavLink to='/Home' className={classes.p}> Home</NavLink></span>
                <span>
                        <NavLink to='/Store' className={classes.p}> Store</NavLink></span>
                <span>
                        <NavLink to='/About' className={classes.p}> About</NavLink></span>
                <span>
                        <NavLink to='/Contact' className={classes.c}>Contact Us</NavLink>
                </span>
            </Nav>
                <Cart />
            </Navbar>
        </header>
    )
};
export default MainHeader;