import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Views/Home';
import About from './Views/About';
import Product from './Views/Product';


function App() {
    return (
        <div>
            <Router>
                <Header />

                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/about">
                            <About />
                        </Route>

                        <Route exact path="/products/:id">
                            <Product />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
