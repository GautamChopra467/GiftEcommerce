import React, { useState } from 'react';
import { auth } from '../../../firebaseInstance';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("logged in", userCredential)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignup = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("signed up", userCredential)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log("signed out")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AuthComponent;
