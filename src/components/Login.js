import React from 'react';
import Validator from '../utils/Validator';

function Login({ onLogin, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } = Validator();
  const email = React.useRef();
  const password = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(
      email.current.value,
      password.current.value
    )
  }

  React.useEffect(() => {
    resetForm();
    setTimeout(() => {email.current.focus()}, 100)
  }, []);

  return (
    <div className='login'>
      <h2 className='login__title'>Вход</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <input
          ref={email}
          className='login__input'
          id='login__email'
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
          value={values.email || ''}
          required
        />
        <span
          className='login__error'
          id='email__error'>
          {errors.email || ''}
        </span>
        <input
          ref={password}
          className='login__input'
          id='login__password'
          name='password'
          type='password'
          placeholder='Пароль'
          onChange={handleChange}
          value={values.password || ''}
          required
        />
        <span
          className='login__error'
          id='email__error'>
          {errors.password || ''}
        </span>
        <button
          className={`login__button ${!isValid && 'login__button_disabled'}`}
          id='login__submit-button'
          type='submit'>
          {`${isLoading ? 'Войти' : 'Вход...'}`}
        </button>
      </form>
    </div>
  )
}

export default Login;
