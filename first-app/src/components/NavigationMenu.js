import React from 'react';
import { BrowserRouter as Router,
        Link 
    } from "react-router-dom";

function NavigationMenu(props) {
    return (
        <diy>
            <div className="font-bold py-3">Menu</div>
            <Router>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >Home</Link>
                    </li>

                    <li>
                        <Link
                            to="/about"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >About</Link>
                    </li>

                    <li>
                        <Link
                            to="/product/:id"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >Product</Link>
                    </li>

                    <li>
                        <Link
                            to="/tic-tac-toe"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >Play tic-tac-toe</Link>
                    </li>

                    <li>
                        <Link
                            to="/calculator"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >Calculator</Link>
                    </li>

                    <li>
                        <Link
                            to="/game"
                            className="text-blue-500 py-3 border-b block"
                            onClick={props.closeMenu}
                        >Game</Link>
                    </li>
                </ul>
            </Router>
        </diy>
    )
}

export default NavigationMenu;

