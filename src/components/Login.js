import React from 'react';

function Login({ onLogin }) {
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
    onLogin(email, password)
  }

  return (
    <div className='login'>
      <h2 className='login__title'>Вход</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <input
          className='login__input'
          id='login__email'
          name='login__email'
          type='email'
          placeholder='Email'
          onChange={handleEmailChange}
          value={email || ''}
          required
        />
        <input
          className='login__input'
          id='login__password'
          name='login__password'
          type='password'
          placeholder='Пароль'
          onChange={handlePasswordChange}
          value={password || ''}
          required
        />
        <button className='login__button' id='login__submit-button' type='submit'>Войти</button>
      </form>
    </div>
  )
}

export default Login;
