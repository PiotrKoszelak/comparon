import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import MyProgress from '../stateless/Progress';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Snackbar from './Snackbar';
import Modal from '@material-ui/core/Modal';
import OfferTemplate from './Offer_template';
import * as colors from "../style/colors";


const useStyles = makeStyles({
  root: {
    top: 80,
    width: '94vw',
    left: '3vw',
    position: 'absolute',
    marginBottom: 50,
  },
  rootContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    position: 'relative',
    left: '10%',
  },

  /* contact */

  contactContent : {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    '@media (max-width:600px)' : {
      marginTop: 30,
    }
  },
  phone: {
    padding: '20px 0px',
    height: 30,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    position: 'relative',
    left: '10%',
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
    marginBottom: 20,
    padding: '20px 0px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
    position: 'relative',
    left: '10%',
    flexDirection: 'column',
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
    width: '90%',
  },
  helperText : {
    color: colors.attentionColor,
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailTo: {
    width: '70%',
  },

  /* offer */


  rootPanel: {
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: 10,
    margin: '15px 0px',
    padding: 0,
    boxShadow: 'none',
    width: '100%',
    position: 'relative',
  },
  iconInfo : {
    width: 50,
    height: 50,
    marginRight: 20,
    '@media (max-width:600px)' : {
        width: 30,
        height: 30,
    }
  },
  expansionPanelSummary: {
    padding: 5, 
    width: '98%',
    '@media (max-width:600px)' : {
      position: 'relative',
      left: '2%',
      width: '96%'
    }
  },
  icon : {
    height: 30,
    width: 30,
    marginRight: 10,
    '@media (max-width:1000px)' : {
      height: 20,
      width: 20,
    },
    '@media (max-width:600px)' : {
      height: 15,
      width: 15,
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
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 150,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width:600px)' : {
      maxWidth: 200,
    }
  },
  panel: {
    padding: 0,
    minHeight: 80,
    display: 'flex',
    width: '100%',
    '@media (max-width:700px)' : {
      alignContent: 'space-between',
      flexDirection: 'column',
    }
  },
  panelFirst: {
    display: 'flex', 
    flexBasis: '25%',
    '@media (max-width:700px)' : {
      flexBasis: '100%',
    }
  },
  panelSecond: {
    display: 'flex', 
    flexBasis: '75%',
    '@media (max-width:700px)' : {
      marginTop: 15,
      flexBasis: '90%',
    }
  },
  panelThird: {
    display: 'none', 
  },
  media: {
    height: 80,
    width: 80,
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: 10,
    '@media (max-width:1000px)' : {
      height: 60,
      width: 60,
    },
  },
  column: {
    flexBasis: '33%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: `${colors.secondaryColor}`,
    fontFamily: 'Lato',
    padding: '0 10',
    '@media (max-width:1100px)' : {
      flexDirection: 'column',
    }
  },
  helper: {
    borderLeft: `1px solid ${colors.secondaryColor}`,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    fontFamily: 'Lato',
    marginTop: 15,
    marginBottom: 5,
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
      marginTop: 5,
    },
  },
  price: {
    fontSize: 30,
    '@media (max-width:1000px)' : {
      fontSize: 25,
    },
    '@media (max-width:600px)' : {
      fontSize: 18,
    }
  },
  desc: {
    fontSize: 16,
    '@media (max-width:1000px)' : {
      fontSize: 14,
    },
    '@media (max-width:600px)' : {
      fontSize: 12,
    }
  },
  equipment: {
    width: '80%',
    height: 'auto',
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
                  success,
                  isEmpty
                  }){

  const classes = useStyles();

  const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const [userEmail, setUserEmail] = useState('');
  const [userComment, setUserComment] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLastname, setUserLastname] = useState(null);
  const [userPhone, setUserPhone] = useState(null);
  const [userAddress, setUserAddress] = useState(null);
  const [emailValidation, setEmailValidation] = useState(null);
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
    }
    else if (event.target.id === 'name'){
      setUserName(event.target.value);
    }
    else if (event.target.id === 'lastname'){
      setUserLastname(event.target.value);
    }
    else if (event.target.id === 'phone'){
      setUserPhone(event.target.value);
    }
    else if (event.target.id === 'address'){
      setUserAddress(event.target.value);
    }
  }

  const sendMessage = () => {
    if (!userEmail){
      setEmailValidation(false);
    }
    else{
      emailRegex.test(userEmail) ? setEmailValidation(true) : setEmailValidation(false);
    } 
    if (userAddress === null) setUserAddress('');
    if (userName === null) setUserName('');
    if (userLastname === null) setUserLastname('');
    if (userPhone === null) setUserPhone('');
    if (userComment === null) setUserComment('');
    if (emailValidation===true && userAddress && userComment && userLastname && userName && userPhone){
      setIsSnackbar(false);
      setModalOpen(true);
      sendMessageToServer('offer', userEmail, userComment, contact.email, offerInfo.id, userName, userLastname, userPhone, userAddress)
        .then(res => {
          setModalOpen(false);
          setIsSnackbar(true);
          setIsSend(res);
        })
    }
  }

  if (isLoading===true){
    return(
      <MyProgress />
    )
  }
  else if (isEmpty===true){
    return (
      <div className={classes.info} >
        <img className={classes.iconInfo} src={require(`../img/none.jpg`)} alt='none' />
        <span className={classes.text}>{translation.NONE[language]}</span>
      </div>
    )
  }
  else if (success!==true){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.iconInfo} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (!offerInfo || !details || !contact ){
      return (
        <div className={classes.info} >
            <img className={classes.iconInfo} src={require(`../img/none.jpg`)} alt='none' />
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
              className={classes.modal}
              open={isModalOpen}
            >
              <MyProgress />
            </Modal>
            <div className={classes.rootContent}>
                  <div style={{overflowX: 'none !important'}}>
                        <OfferTemplate
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
                    < div className={classes.emailContent}>
                      <MailOutlineIcon />
                      <FormControl>
                        <TextField
                          id="name"
                          label={translation.NAME[language]}
                          defaultValue={userName}
                          onChange={handleChange}
                        />
                        {userName==='' ? <FormHelperText id="my-helper-text-name" className={classes.helperText}>{translation.THIS_FIELD_IS_REQUIRED[language]}</FormHelperText> : null}
                      </FormControl>
                      <FormControl >
                        <TextField
                          id="lastname"
                          label={translation.LASTNAME[language]}
                          defaultValue={userLastname}
                          onChange={handleChange}
                        />
                        {userLastname==='' ? <FormHelperText id="my-helper-text-lastname" className={classes.helperText}>{translation.THIS_FIELD_IS_REQUIRED[language]}</FormHelperText> : null}
                      </FormControl>
                      <FormControl >
                          <TextField
                            id="email"
                            label={translation.EMAIL[language]}
                            defaultValue={userEmail}
                            onChange={handleChange}
                          />
                          {emailValidation===true ? null : emailValidation===false ? <FormHelperText id="my-helper-text-email" className={classes.helperText}>{translation.EMAIL_NOT_VALID[language]}</FormHelperText> : null}
                      </FormControl>
                      <FormControl >
                          <TextField
                            id="phone"
                            label={translation.PHONE[language]}
                            defaultValue={userPhone}
                            onChange={handleChange}
                          />
                          {userPhone==='' ? <FormHelperText id="my-helper-text-phone" className={classes.helperText}>{translation.THIS_FIELD_IS_REQUIRED[language]}</FormHelperText> : null}
                      </FormControl>
                      <FormControl >
                          <TextField
                            id="address"
                            label={translation.ADDRESS[language]}
                            defaultValue={userAddress}
                            onChange={handleChange}
                          />
                          {userAddress==='' ? <FormHelperText id="my-helper-text-address" className={classes.helperText}>{translation.THIS_FIELD_IS_REQUIRED[language]}</FormHelperText> : null}
                      </FormControl>
                      <FormControl >
                        <TextField
                          multiline
                          rowsMax='10'
                          id="comment"
                          label={translation.COMMENT[language]}
                          defaultValue={userComment}
                          onChange={handleChange}
                        />
                        {userComment==='' ? <FormHelperText id="my-helper-text-comment" className={classes.helperText}>{translation.THIS_FIELD_IS_REQUIRED[language]}</FormHelperText> : null}
                      </FormControl>
                    </div>
                    <div  size="small" variant="contained" color="primary" className={classes.button} onClick={() => sendMessage()}>
                          {translation.ORDER[language]}
                    </div>
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
  isEmpty: PropTypes.bool,
  contact: PropTypes.object,
  isLoadedContact: PropTypes.bool,
  sendMessageToServer: PropTypes.func,
};
export default SelectedOffer;