import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import AuthContext from './Context/AuthContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Productcatalog from './pages/Productcatalog';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Register from './pages/Register';

export default function Routers() {
    const { loggedIn } = useContext(AuthContext)

    return (
        <>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/productcatalog" component={Productcatalog} />
                    <Route path="/product/:id" component={Products} />
                    <Route path="/productDetail/:id" component={ProductDetail} />
                    <Route path="/contact" component={Contact} />
                    {
                        loggedIn === true && (<>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/logout" >
                                <Logout />
                            </Route>
                        </>)
                    }
                    {
                        loggedIn === false && (<>
                            <Route path="/register" component={Register} />
                            <Route path="/login" component={Login} />
                        </>)
                    }

                </Switch>
                <Footer />
            </Router>
        </>
    )
}
