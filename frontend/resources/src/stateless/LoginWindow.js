import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as colors from "../style/colors";
import translation from "../translation"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from './Snackbar';


const useStyles = makeStyles({
  content: {
   height: 120,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   width: 400,
   '@media (max-width:600px)' : {
      width: 'calc(100% - 48px)',
    },
  },
  button: {
    fontFamily: 'Lato',
    display: 'block',
    padding: '5px 20px',
    color: `${colors.secondaryColor}`,
    cursor: 'pointer',
    width: 80,
    textAlign: 'center',
    backgroundColor: `${colors.white}`,
    transition: 'color 0.5s ease, background-color 0.5s ease',
    '&:hover' : {
      backgroundColor: `${colors.primaryColor}`,
      color: `${colors.white}`,
      transition: 'color 0.5s ease, background-color 0.5s ease',
    },
    border: `1.5px solid ${colors.primaryColor}`,
    borderRadius: 10,
    fontSize: 12,
    '@media (max-width:600px)' : {
      fontSize: 10,
      width: 50,
      margin: 0,
    },
  },
  buttonCancel: {
    border: `1.5px solid ${colors.attentionColor}`,
    transition: 'color 0.5s ease, background-color 0.5s ease',
    '&:hover' : {
      backgroundColor: `${colors.attentionColor}`,
      color: `${colors.white}`,
      transition: 'color 0.5s ease, background-color 0.5s ease',
    },
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    height: 60,
  }
});

export default function LoginWindow({isOpen, handleClose, language, tryToSignIn, success, setIsSnackbar, isSnackbar}) {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
    login: '',
  });

  const handleChange = prop => event => {
    setIsSnackbar(false);
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const send = () => {
    tryToSignIn(values.login, values.password);
  }

  return (
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title" >
      {     success===true ? 
              <Snackbar 
                  text={translation.YOU_ARE_SIGN_IN[language]} 
                  vertical={'top'}
                  horizontal={'center'}
                  isOpen={isSnackbar}
                  close={setIsSnackbar}
              />
              :
              success===false ?
              <Snackbar 
                  text={translation.INCORRECT_DATA_OF_SIGN_IN[language]} 
                  vertical={'top'}
                  horizontal={'center'}
                  isOpen={isSnackbar}
                  close={setIsSnackbar}
              />
              :
              null
      }
        <DialogTitle id="form-dialog-title">{translation.SIGN_IN[language]}</DialogTitle>
        <DialogContent className={classes.content}>
          <TextField
            autoFocus
            id="login"
            label={translation.LOGIN[language]}
            type="text"
            fullWidth
            variant="outlined"
            value={values.login}
            onChange={handleChange('login')}
          />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{translation.PASSWORD[language]}</InputLabel>
              <OutlinedInput
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
          </FormControl>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <div onClick={handleClose} className={clsx(classes.button, classes.buttonCancel)}>
            {translation.CANCEL[language]}
          </div>
          <div onClick={send} className={classes.button}>
            {translation.SIGN_IN[language]}
          </div>
        </DialogActions>
      </Dialog>
  );
}