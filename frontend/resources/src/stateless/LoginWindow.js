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

export default function LoginWindow({isOpen, handleClose, language}) {

  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title" >
        <DialogTitle id="form-dialog-title">{translation.SIGN_IN[language]}</DialogTitle>
        <DialogContent className={classes.content}>
          <TextField
            autoFocus
            id="login"
            label={translation.LOGIN[language]}
            type="email"
            fullWidth
            variant="outlined"
          />
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">{translation.PASSWORD[language]}</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
          <div onClick={handleClose} className={classes.button}>
            {translation.SIGN_IN[language]}
          </div>
        </DialogActions>
      </Dialog>
  );
}