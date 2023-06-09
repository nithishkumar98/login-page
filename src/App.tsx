import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [credentialData, SetCredentialData] = useState({
    username: '',
    password: '',
  });

  const credentialDataHandler = (e) => {
    SetCredentialData({ ...credentialData, [e.target.name]: [e.target.value] });
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={credentialDataHandler}
        value={credentialData.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={credentialDataHandler}
        value={credentialData.password}
      />

      <button> Login </button>
    </div>
  );
}
