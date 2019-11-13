import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import DetailTemplate from './Detail_template';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from './Snackbar'


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '80vh',
    top: '15vh',
    left: '5vw',
    width: '90vw',
    position: 'relative',
    justifyContent: 'space-around',
    '@media (max-width:600px)' : {
      top: '20vh',
      flexDirection: 'column', 
      alignItems: 'center',
    }
  },
  rootContent: {
    display: 'flex',
  },
  contactContent : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '@media (max-width:600px)' : {
      marginTop: 30,
    }
  },
  offerContent : {
    display: 'flex',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  details: {
    fontFamily: "Lato",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  detail : {
    height: 45,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: 150,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      height: 20,
      width: 90,  
    }
  },
  icon : {
    height: 45,
    width: 40,
    marginRight: 15,
    '@media (max-width:600px)' : {
      height: 20,
      width: 20,
      marginRight: 10,  
    }
  },
  button: {
    marginTop: 20,
    backgroundColor: '#bda3f0',
    marginBottom: 20,
    display: 'block',
    '@media (max-width:600px)' : {
      fontSize: 9,  
    }
  },
  text : {
    fontFamily: "Lato",
    fontSize: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width:600px)' : {
        fontSize: 11,  
    }
  },
  info : {
    position: 'relative',
    top: 100,
    width: 150,
    left: 'calc(50vw - 75px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      width: 80,
      left: 'calc(50vw - 40px)',
    }
  },
  progress: {
    position: 'relative',
    top: 100,
  },
  divider: {
    width: '90%',
  },
  description: {
    display: 'flex', 
    alignItems: 'center',
  },
  closeButton: {
    padding: 0,
    width: 25,
    height: 25,
    '@media (max-width:600px)' : {
      width: 10,
      height: 10,
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  phone: {
    padding: 20,
    height: 30,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '30vw',
    '@media (max-width:600px)' : {
      width: '50vw',
    }
  },
  phoneNumber: {
    fontFamily: 'Lato',
    fontSize: 20,
    '@media (max-width:600px)' : {
      fontSize: 15,
    }
  },
  email: {
    marginTop: 30,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '30vw',
    flexDirection: 'column',
    '@media (max-width:600px)' : {
      width: '50vw',
    }
  },
  emailHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  emailContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '80%',
  },
  helper : {
    color: 'red'
  },
});

function SelectedOffer  ({
                  details, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types,
                  isLoading,
                  contact,
                  sendMessageToServer,
                  success
                  }){

  const classes = useStyles();

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [userEmail, setUserEmail] = useState('');
  const [userComment, setuserComment] = useState('');
  const [emailValidation, setEmailValidation] = useState(null);
  const [commentNotNull, setCommentNotNull] = useState(null);
  const [isSend, setIsSend] = useState(null);

  const handleChange = (event) => {
    if (event.target.id === 'email'){
      setUserEmail(event.target.value);
      if (emailRegex.test(event.target.value)) setEmailValidation(true);
    }
    else if (event.target.id === 'comment'){
      setuserComment(event.target.value);
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
      sendMessageToServer()
        .then(res => {setIsSend(res)})
    }
  }



  if (isLoading===true){
    return(
      <div className={classes.info} >
          <CircularProgress className={classes.progress} color="secondary" disableShrink />
      </div>
    )
  }
  else if (success!==true){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (!offerInfo || !details || !contact ){
      return (<div className={classes.info} >
        <LocalOfferIcon color='secondary' className={classes.icon} />
        <span className={classes.text}>{translation.NONE[language]}</span>
        </div>
      )
    }
    else{
        return(
          <section className={classes.root} >
            {isSend===true ? 
              <Snackbar 
                  text={translation.EMAIL_SEND_CORRECTLY[language]} 
                  vertical={'top'}
                  horizontal={'center'}
              />
              :
              isSend===false ?
              <Snackbar 
                  text={translation.EMAIL_SEND_INCORRECTLY[language]} 
                  vertical={'top'}
                  horizontal={'center'}
              />
              :
              null
            }
            <div className={classes.rootContent}>
                  <div style={{overflowX: 'none !important'}}>
                      <DetailTemplate
                                  withoutIcon={false}
                                  withoutText={true}
                                  enableDelete={false}
                                  enableButton={false}
                                  classes={classes}
                                  language={language}
                                  offerInfo={{}}
                                  details={{}}
                                  operators={operators}
                                  periods={periods}
                                  types={types}
                      />
                  </div>
                  <div className={classes.offerContent} >
                        <DetailTemplate
                            enableDelete={false}
                            withoutIcon={true}
                            withoutText={false}
                            enableButton={false}
                            details={details}
                            offerInfo={offerInfo}
                            language={language}
                            operators={operators}
                            periods={periods}
                            types={types}
                            classes={classes}
                        />
                  </div>
            </div>
            <div className={classes.contactContent}>
            <Paper className={classes.phone}>
              <PhoneIcon />
                <p className={classes.phoneNumber}>{contact.phone}</p>
            </Paper>
            <Paper className={classes.email}>
              <div className={classes.emailHeader}>
                  <MailOutlineIcon />
                  <TextField
                    disabled
                    id="standard-disabled"
                    label={translation.EMAIL_TO[language]}
                    defaultValue={contact.email}
                    className={classes.input}
                    margin="normal"
                  />
              </div>
              < div className={classes.emailContent}>
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
              <Button  size="small" variant="contained" color="primary" className={classes.button} onClick={() => sendMessage()}>
                    {translation.SEND[language]}
              </Button>
            </Paper>
            </div>

          </section>
        )
    }
  }
};

SelectedOffer.propTypes = {
  details: PropTypes.object,
  offerInfo: PropTypes.object,
  language: PropTypes.string,
  operators: PropTypes.object,
  periods: PropTypes.object,
  types: PropTypes.object,
  isLoadedDetail: PropTypes.bool,
  isLoadedOfferInfo: PropTypes.bool,
  isLoading: PropTypes.bool,
  contact: PropTypes.object,
  isLoadedContact: PropTypes.bool,
  sendMessageToServer: PropTypes.func,
};
export default SelectedOffer;