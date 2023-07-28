import { Route, Redirect, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import CartProvider from './components/store/CartProvider';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Store from './pages/Store';
import { Navbar } from "react-bootstrap";
import classes from './App.module.css'
import ProductDetails from './pages/ProductDetails';
import { useContext } from 'react';
import AuthContext from './components/store/auth-context';
import Login from './pages/Login';

function App() {
    const authCntxt = useContext(AuthContext)
    return (
        <div>
            <CartProvider>
                <MainHeader />
                <Navbar bg="secondary" expand="sm" variant="dark">
                    <Navbar.Brand className={classes.h1}>The Generics</Navbar.Brand>
                </Navbar>
                <main>
                    <Switch>
                        <Route path="/" exact>
                    <Redirect to='/Login'/>
                    </Route>
                    <Route path="/Home">
                        <Home />
                    </Route>
                        <Route path="/Store" exact>
                            {authCntxt.isLoggedIn && < Store />}
                            {!authCntxt.isLoggedIn && <Redirect to = '/Login'/>}
                    </Route>
                    <Route path="/About">
                        <About />
                        </Route>
                        <Route path="/Login">
                            {authCntxt.isLoggedIn && <Store />}
                            {!authCntxt.isLoggedIn && <Login/>}
                        
                        </Route>
                    <Route path="/Contact">
                        <ContactUs />
                    </Route>
                    <Route path="/Store/:productId">
                        <ProductDetails/>
                        </Route>
                    </Switch>

                </main>
                <Navbar className={classes.bar} bg="primary" variant="dark" >
                    <Navbar.Brand className={classes.h2}>The Generics</Navbar.Brand>
                </Navbar>
            </CartProvider>
        </div>
    );
}

export default App;
