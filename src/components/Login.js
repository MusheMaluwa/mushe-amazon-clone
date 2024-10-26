import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Login.css';
import {auth} from '../Firebase'


const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate(); 
 

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{        
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password) 
    .then(
      (auth) => {
        if(auth) {
          navigate('/')
        }
      }).catch(error => alert (error.message))
  };


  return (
    <div className='login'>
      <Link to='/'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzYN7H1Xds8oWcXqZpsUUhXnZFsNK21iq1A&s"
          alt="amazon logo"
          className='login_logo'
        />
      </Link>
      <div className='login_container'>
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type='submit'
            className='login_signInButton'
            onClick={signIn}>
            Sign In
          </button>
          <p>
            By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.
          </p>
          <button className='login_registerButton' onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
