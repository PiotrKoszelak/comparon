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
      top: '3vh',
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
  input : {
  }
});

function SelectedOffer  ({
                  details, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types,
                  loadedDetail,
                  loadedOfferInfo,
                  loading,
                  contact,
                  loadedContact,
                  }){

  const classes = useStyles();

  const [userEmail, setUserEmail] = useState('');
  const [userComment, setuserComment] = useState('');

  if (loading===true){
    return(
      <div className={classes.info} >
          <CircularProgress className={classes.progress} color="secondary" disableShrink />
      </div>
    )
  }
  else if ((loadedDetail === false || loadedOfferInfo === false || loadedContact === false) && loading===false){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (!offerInfo || !details || !contact || offerInfo.length===0 || details.length===0 || contact.length===0){
      return (<div className={classes.info} >
        <LocalOfferIcon color='secondary' className={classes.icon} />
        <span className={classes.text}>{translation.NONE[language]}</span>
        </div>
      )
    }
    else{
        return(
          <section className={classes.root} >
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
                  <TextField
                    id="standard-disabled"
                    label={translation.YOUR_EMAIL[language]}
                    defaultValue={userEmail}
                    className={classes.input}
                    margin="normal"
                  />
                  <TextField
                    multiline
                    id="standard-disabled"
                    label={translation.COMMENT[language]}
                    defaultValue={userComment}
                    className={classes.input}
                    margin="normal"
                  />
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
  operators: PropTypes.array,
  periods: PropTypes.array,
  types: PropTypes.array,
  loadedDetail: PropTypes.bool,
  loadedOfferInfo: PropTypes.bool,
  loading: PropTypes.bool,
  contact: PropTypes.object,
  loadedContact: PropTypes.bool,
};
export default SelectedOffer;