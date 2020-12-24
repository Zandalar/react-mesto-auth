import React from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({
      email: email,
      password: password
    })
  }

  return (
    <div className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <form className='register__form' onSubmit={ handleSubmit }>
        <input
          className='register__input'
          id='register__email'
          name='register__email'
          type='email'
          placeholder='Email'
          onChange={handleEmailChange}
          required
        />
        <input
          className='register__input'
          id='register__password'
          name='register__password'
          type='password'
          placeholder='Пароль'
          onChange={handlePasswordChange}
          required
        />
      </form>
      <button className='register__button' id='login__submit-button' type='submit'>Зарегистрироваться</button>
      <p className='register__subtitle'>
        Уже зарегистрированы?&ensp;
        <Link to='/sign-in' className='register__link'>Войти</Link>
      </p>
    </div>
  )
}

export default Register;
