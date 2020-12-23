import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = (e) => {
    const { name, value } = e.traget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='text'
          placeholder='email'
          required
          value={email}
          onChange={onChange}
        ></input>
        <input
          name='password'
          type='password'
          placeholder='password'
          required
          value={password}
          onChange={onChange}
        ></input>
        <input type='submit' value='Log In' />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
