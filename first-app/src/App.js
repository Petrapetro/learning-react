import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product'
import TicTacToe from './Views/TicTacToe'
import Calculator from './Views/Calculator'
import Game from './Views/Game'


function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products/:id">
              <Product />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;