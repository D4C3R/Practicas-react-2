import React from 'react';
import '../styles/StyleLogin.css'

function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
