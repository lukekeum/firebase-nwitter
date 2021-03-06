import React, { useState } from 'react';
import { authService } from '../fbase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
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
        <input type='submit' value={newAccount ? 'Create Account' : 'Log In'} />
      </form>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
