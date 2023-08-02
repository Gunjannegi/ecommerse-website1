import { Route, Redirect, Switch } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import CartProvider from './components/store/CartProvider';
import { Navbar } from "react-bootstrap";
import classes from './App.module.css';
import { lazy, Suspense, useContext } from 'react';
import AuthContext from './components/store/auth-context';


const Home = lazy(() => import('./pages/Home/Home'))
const Store = lazy(() => import('./pages/Store/Store'))
const About = lazy(() => import('./pages/About/About'))
const Login = lazy(() => import('./pages/Login/Login'))
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'))
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'))
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
                            <Redirect to='/Login' />
                        </Route>
                        <Suspense fallback={<p>Loading...</p>}>
                            <Route path="/Home"
                                loader={() => import('./pages/Home/Home').then((module) => module.loader())}>
                            <Home/>
                           </Route>
                        <Route path="/Store" exact
                            loader={() => import('./pages/Store/Store').then((module) => module.loader())}>
                            {authCntxt.isLoggedIn && < Store />}
                            {!authCntxt.isLoggedIn && <Redirect to='/Login' />}
                            </Route>
                        <Route path="/About"
                            loader={() => import('./pages/About/About').then((module) => module.loader())}>
                            <About />
                            </Route>
                        <Route path="/Login"
                            loader={() => import('./pages/Login/Login').then((module) => module.loader())}>
                            {authCntxt.isLoggedIn && <Redirect to='/Store' />}
                            {!authCntxt.isLoggedIn && <Login />}
                            </Route>
                        <Route path="/Contact"
                                loader={() => import('./pages/ContactUs/ContactUs').then((module) => module.loader())}>
                            <ContactUs />
                            </Route>
                        <Route path="/Store/:productId"
                            loader={() => import('./pages/ProductDetails/ProductDetails').then((module) => module.loader())}>
                            <ProductDetails />
                            </Route></Suspense>
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
