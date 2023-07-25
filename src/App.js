import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import CartProvider from './components/store/CartProvider';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Store from './pages/Store';
import { Navbar } from "react-bootstrap";
import classes from './App.module.css'
function App() {
  return (
      <div>
          <CartProvider>
              <MainHeader />
              <Navbar bg="secondary" expand="sm" variant="dark">
                  <Navbar.Brand className={classes.h1}>The Generics</Navbar.Brand>
              </Navbar>
      <main>
          <Route path="/Home">
              <Home/>
          </Route>
          <Route path="/Store">
              <Store />
          </Route>
          <Route path="/About">
              <About />
                  </Route>
                  <Route path="/Contact">
                      <ContactUs />
                  </Route>
              </main>
              <Navbar bg="primary" variant="dark" >
                  <Navbar.Brand className={classes.h2}>The Generics</Navbar.Brand>
              </Navbar>
          </CartProvider>
    </div>
  );
}

export default App;
