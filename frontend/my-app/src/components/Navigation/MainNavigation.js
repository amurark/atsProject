import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';

import './MainNavigation.css';

const mainNavigation = props => (
    <AuthContext.Consumer>
        {
            (context) => {
                return (
                    <header className="main-navigation">
                        <NavLink className="main-navigation__logo" to="/home">
                            <h1>Ankit Travel Services</h1>
                        </NavLink>
                        <nav className="main-navigation__items">
                            <ul>
                                {!context.token && (
                                    <li>
                                        <NavLink to="/promotions">Promotions</NavLink>
                                    </li>
                                )}
                                {!context.token && (
                                    <li>
                                        <NavLink to="/auth">Login</NavLink>
                                    </li>
                                )}
                                {context.token && (
                                    <React.Fragment>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <button onClick={context.logout}>Logout</button>
                                        </li>
                                    </React.Fragment>
                                )}
                            </ul>
                        </nav>
                    </header>
                )
            }
        }
    </AuthContext.Consumer>
);

export default mainNavigation;