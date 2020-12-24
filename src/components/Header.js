import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from "../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <Route exact path='/sign-in'>
        <Link to='/sign-up' className='header__link'>Регистрация</Link>
      </Route>
      <Route exact path='/sign-up'>
        <Link to='/sign-in' className='header__link'>Войти</Link>
      </Route>
    </header>
  )
}

export default Header;
