import React from 'react';

function Login({ onSubmit }) {
  return (
    <div className='login'>
      <h2 className='login__title'>Вход</h2>
      <form className='login__form' onSubmit={ onSubmit }>
        <input
          className='login__input'
          id='login__email'
          name='login__email'
          type='email'
          placeholder='Email'
          required
        />
        <input
          className='login__input'
          id='login__password'
          name='login__password'
          type='password'
          placeholder='Пароль'
          required
        />
      </form>
      <button className='login__button' id='login__submit-button' type='submit'>Войти</button>
    </div>
  )
}

export default Login;
