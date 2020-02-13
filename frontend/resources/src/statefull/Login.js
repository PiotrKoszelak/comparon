import React from 'react';
import LoginWindow from '../stateless/LoginWindow';

export default function Login({isOpen, closeLoginWindow, language}) {

  const handleClose = () => {
    closeLoginWindow();
  };

  return (
    <div style={{position: 'absolute'}}>
        <LoginWindow isOpen={isOpen} handleClose={handleClose} language={language} />
    </div>
  );
}