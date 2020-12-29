import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../images/header__logo.svg';

function Header({ userEmail, handleLogout }) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Логотип сайта' />
      <div className='header__user-info'>
        <Route exact path='/sign-in'>
          <Link to='/sign-up' className='header__link'>Регистрация</Link>
        </Route>
        <Route exact path='/sign-up'>
          <Link to='/sign-in' className='header__link'>Войти</Link>
        </Route>
        <Route exact path='/'>
          <p className='header__email'>{userEmail}</p>
          <button onClick={handleLogout} className='header__logout'>Выйти</button>
        </Route>
      </div>
    </header>
  )
}

export default Header;
