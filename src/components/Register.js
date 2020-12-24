import React from 'react';

function Register({ onSubmit }) {
  return (
    <div className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <form className='register__form' onSubmit={ onSubmit }>
        <input
          className='register__input'
          id='register__email'
          name='register__email'
          type='email'
          placeholder='Email'
          required
        />
        <input
          className='register__input'
          id='register__password'
          name='register__password'
          type='password'
          placeholder='Пароль'
          required
        />
      </form>
      <button className='login__button' id='login__submit-button' type='submit'>Зарегистрироваться</button>
      <p className='register__subtitle'>
        Уже зарегистрированы?
        <a className='register__link' href='/sign-in'>Войти</a>
      </p>
    </div>
  )
}

export default Register;
