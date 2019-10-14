import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import DetailTemplate from './Detail_template';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '80vh',
    top: '15vh',
    left: '5vw',
    width: '90vw',
    position: 'relative',
  },
  rootContent : {
    display: 'flex',
    justifyContent: 'flex-start',
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
  }
});

function Compare  ({
                  details, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types,
                  loadedDetail,
                  loadedOfferInfo,
                  loading,
                  isEmpty,
                  handleDelete,
                  handleDrag
                  }){

  const classes = useStyles();

  if (loading===true){
    return(
      <div className={classes.info} >
          <CircularProgress className={classes.progress} color="secondary" disableShrink />
      </div>
    )
  }
  else if (isEmpty===true){
    return (<div className={classes.info} >
      <LocalOfferIcon color='secondary' className={classes.icon} />
      <span className={classes.text}>{translation.NONE[language]}</span>
      </div>
    )
  }
  else if ((loadedDetail === false || loadedOfferInfo === false) && loading===false){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (!offerInfo || !details){
      return (<div className={classes.info} >
        <LocalOfferIcon color='secondary' className={classes.icon} />
        <span className={classes.text}>{translation.NONE[language]}</span>
        </div>
      )
    }
    else{
                
        return(
          <section className={classes.root} >
            <div style={{overflowX: 'none !important'}}>
                <DetailTemplate
                            withoutIcon={false}
                            withoutText={true}
                            classes={classes}
                            language={language}
                />
            </div>
            <div className={classes.rootContent} >
              {offerInfo.map((el, key) => (
                      <DetailTemplate
                          key={key}
                          enableDelete={true}
                          withoutIcon={true}
                          withoutText={false}
                          details={details[key]}
                          offerInfo={offerInfo[key]}
                          language={language}
                          operators={operators}
                          periods={periods}
                          types={types}
                          classes={classes}
                          handleDelete={handleDelete}
                          handleDrag={handleDrag}
                      />
                  ))}
            </div>
          </section>
        )
    }
  }
};

  Compare.propTypes = {
  details: PropTypes.array,
  offerInfo: PropTypes.array,
  language: PropTypes.string,
  operators: PropTypes.array,
  periods: PropTypes.array,
  types: PropTypes.array,
  loadedDetail: PropTypes.bool,
  loadedOfferInfo: PropTypes.bool,
  loading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  handleDelete: PropTypes.func,
  handleDrag: PropTypes.func,
};
export default Compare;