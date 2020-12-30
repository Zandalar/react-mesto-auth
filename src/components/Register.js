import React from 'react';
import { Link } from 'react-router-dom';
import Validator from '../utils/Validator';

function Register({ onRegister, isLoading }) {
  const { values, errors, isValid, handleChange, resetForm } = Validator();
  const email = React.useRef();
  const password = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(
      email.current.value,
      password.current.value
    )
  }

  React.useEffect(() => {
    resetForm();
    setTimeout(() => {email.current.focus()}, 0)
  }, []);

  return (
    <div className='register'>
      <h2 className='register__title'>Регистрация</h2>
      <form className='register__form' onSubmit={ handleSubmit }>
        <input
          ref={email}
          className='register__input'
          id='register__email'
          name='email'
          type='email'
          placeholder='Email'
          onChange={handleChange}
          value={values.email || ''}
          required
        />
        <span
          className='register__error'
          id='email__error'>
          {errors.email || ''}
        </span>
        <input
          ref={password}
          className='register__input'
          id='register__password'
          name='password'
          type='password'
          placeholder='Пароль'
          onChange={handleChange}
          value={values.password || ''}
          required
        />
        <span
          className='register__error'
          id='password__error'>
          {errors.password || ''}
        </span>
        <button
          className={`register__button ${!isValid && 'register__button_disabled'}`}
          id='login__submit-button'
          type='submit'>
          {`${isLoading ? 'Зарегистрироваться' : 'Регистрация...'}`}
        </button>
      </form>
      <p className='register__subtitle'>
        Уже зарегистрированы?&ensp;
        <Link to='/sign-in' className='register__link'>Войти</Link>
      </p>
    </div>
  )
}

export default Register;
