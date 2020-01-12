import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from './Snackbar';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import MyProgress from '../stateless/Progress';
import { sendMessageToServer } from '../statefull/SelectedOfferProvider';
import * as colors from "../style/colors";

const useStyles = makeStyles({
   root: {
    position: 'absolute',
    top: 100,
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Lato',
    height: 'calc(100vh - 100px)',
  },
  header: {
    fontSize: 20,
    color: `${colors.secondaryColor}`,
    '@media (max-width:600px)' : {
      fontSize: 15,
    }
  },
  email: {
    zIndex: 2,
    border: `0.5px solid ${colors.secondaryColor}`,
    borderRadius: 15,
    boxShadow: 'none',
    marginTop: 30,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    flexDirection: 'column',
    '@media (max-width:600px)' : {
      width: '80%',
    }
  },
  emailContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
  },
  helper : {
    color: `${colors.attentionColor}`,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailTo: {
    width: '70%',
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
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
    },
    input: {
      color: `${colors.secondaryColor}`,
    }
  },
  decoration: {
    position: 'absolute',
    left: 'auto',
    right: 0,
    width: '20vw',
    top: 'auto',
    bottom: 100,
    '@media (max-width:600px)' : {
      display: 'none'
    },
  }
});


function ContactContent ({language}){

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [userEmail, setUserEmail] = useState('');
  const [userComment, setUserComment] = useState('');
  const [emailValidation, setEmailValidation] = useState(null);
  const [commentNotNull, setCommentNotNull] = useState(null);
  const [isSend, setIsSend] = useState(null);
  const [isSnackbar, setIsSnackbar] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleChange = (event) => {
    if (event.target.id === 'email'){
      setUserEmail(event.target.value);
      if (emailRegex.test(event.target.value)) setEmailValidation(true);
    }
    else if (event.target.id === 'comment'){
      setUserComment(event.target.value);
      if (event.target.value) setCommentNotNull(true);
    }

  }

  const sendMessage = () => {
    if (!userEmail){
      setEmailValidation(false);
    }
    else{
      emailRegex.test(userEmail) ? setEmailValidation(true) : setEmailValidation(false);
    } 
    if (!userComment){
      setCommentNotNull(false);
    }
    else{
      setCommentNotNull(true);
    }
    if (emailValidation===true && commentNotNull===true){
      setIsSnackbar(false);
      setModalOpen(true);
      sendMessageToServer('contact', userEmail, userComment)
        .then(res => {
          setModalOpen(false);
          setIsSnackbar(true);
          setIsSend(res);
        })
        
    }
  }

  const classes = useStyles();
   
  return(
      <div className={classes.root}>
        {isSend===true ? 
          <Snackbar 
              text={translation.EMAIL_SEND_CORRECTLY[language]} 
              vertical={'top'}
              horizontal={'center'}
              isOpen={isSnackbar}
              close={setIsSnackbar}
          />
          :
          isSend===false ?
          <Snackbar 
              text={translation.EMAIL_SEND_INCORRECTLY[language]} 
              vertical={'top'}
              horizontal={'center'}
              isOpen={isSnackbar}
              close={setIsSnackbar}
          />
          :
          null
        }
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          className={classes.modal}
          open={isModalOpen}
        >
          <MyProgress />
        </Modal>
        <h2 className={classes.header}>{translation.CONTACT_FORM[language]}</h2>
        <Paper className={classes.email}>
              < div className={classes.emailContent}>
                <MailOutlineIcon />
                <FormControl>
                    <TextField
                      id="email"
                      label={translation.YOUR_EMAIL[language]}
                      defaultValue={userEmail}
                      className={classes.input}
                      margin="normal"
                      onChange={handleChange}
                    />
                    {emailValidation===true ? null : emailValidation===false ? <FormHelperText id="my-helper-text-email" className={classes.helper}>{translation.EMAIL_NOT_VALID[language]}</FormHelperText> : null}
                </FormControl>
                <FormControl>
                  <TextField
                    multiline
                    id="comment"
                    label={translation.COMMENT[language]}
                    defaultValue={userComment}
                    className={classes.input}
                    margin="normal"
                    onChange={handleChange}
                  />
                  {commentNotNull===true ? null : commentNotNull===false ? <FormHelperText id="my-helper-text-comment" className={classes.helper}>{translation.COMMENT_IS_NULL[language]}</FormHelperText> : null}
                </FormControl>
              </div>
              <div  size="small" variant="contained" color="primary" className={classes.button} onClick={() => sendMessage()}>
                    {translation.SEND[language]}
              </div>
            </Paper>
            <img className={classes.decoration} src={require(`../img/decoration_image.jpg`)} alt='decoration' />
      </div>
)};


export default ContactContent;