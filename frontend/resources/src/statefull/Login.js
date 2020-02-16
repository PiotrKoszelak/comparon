import React from 'react';
import LoginWindow from '../stateless/LoginWindow';
import { url, key } from '../config.js'

export default function Login({isOpen, closeLoginWindow, language, setModeAdmin, modeAdmin}) {

  const handleClose = () => {
    closeLoginWindow();
  };

  const signIn = async (username, password) => {
      const response  = await fetch(`${url}/api/login`, {
        method: "post",
        body: `{"username" : "${username}", 
                "password" : "${password}" }`,
              headers: { "Authorization": key },
      })

      return response.ok;
    }

  const tryToSignIn = (username, password) => {

    signIn(username, password)
    .then(res => {
      if (res === true){
        setIsSuccess(true);
        setIsSnackbar(true);
        setTimeout(() => {setModeAdmin(true)}, 1500);
      }
      else{
        setIsSuccess(false);
        setIsSnackbar(true)
      }
    })
  }

  const [isSuccess, setIsSuccess] = React.useState(null);
  const [isSnackbar, setIsSnackbar] = React.useState(false);

  return (
    <div style={{position: 'absolute'}}>
      {!modeAdmin ?
          <LoginWindow 
              isOpen={isOpen} 
              handleClose={handleClose} 
              language={language} 
              tryToSignIn={tryToSignIn} 
              success={isSuccess} 
              setIsSnackbar={setIsSnackbar}
              isSnackbar={isSnackbar}
          />
        :
        null
      }
    </div>
  );
}