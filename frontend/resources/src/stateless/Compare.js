import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import OfferTemplate from './Offer_template';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import MyProgress from '../stateless/Progress';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Snackbar from './Snackbar'
import * as colors from "../style/colors";


const useStyles = makeStyles({
  root: {
    top: 80,
    left: '5vw',
    width: '90vw',
    position: 'absolute',
    marginBottom: 50,
  },
  rootContent : {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  rootPanel: {
    border: `1px solid ${colors.secondaryColor}`,
    borderRadius: 10,
    margin: '15px 0px',
    padding: 0,
    boxShadow: 'none',
    width: '96%',
    position: 'relative',
    left: '2%',
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
    flexBasis: '65%',
    '@media (max-width:700px)' : {
      marginTop: 15,
      flexBasis: '90%',
    }
  },
  panelThird: {
    display: 'flex', 
    flexDirection: 'column',
    flexBasis: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width:700px)' : {
      marginTop: 15,
      flexDirection: 'row',
      flexBasis: '100%',
      justifyContent: 'space-around',
    }
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
    marginTop: 5,
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
      margin: 0,
    },
    input: {
      color: `${colors.secondaryColor}`,
    }
  },
  buttonError: {
    border: `1.5px solid ${colors.attentionColor}`,
    transition: 'color 0.5s ease, background-color 0.5s ease',
    '&:hover' : {
      backgroundColor: `${colors.attentionColor}`,
      color: `${colors.white}`,
      transition: 'color 0.5s ease, background-color 0.5s ease',
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

function Compare  ({
                  details, 
                  offerInfo,
                  language, 
                  operators,
                  periods,
                  types,
                  isLoading,
                  isEmpty,
                  handleDelete,
                  handleDrag,
                  selectOffer,
                  success,
                  error
                  }){

  const classes = useStyles();

  const [offerInfoDrag, setofferInfoDrag] = useState(null);
  const [detailsDrag, setdetailsDrag] = useState(null);
  const [isSnackbar, setIsSnackbar] = useState(false);

  const reorder = (list, detailList, startIndex, endIndex) => {
    const resultList = Array.from(list);
    const [removedFromList] = resultList.splice(startIndex, 1);
    resultList.splice(endIndex, 0, removedFromList);
    const resultDetailList = Array.from(detailList);
    const [removedFromDetailList] = resultDetailList.splice(startIndex, 1);
    resultDetailList.splice(endIndex, 0, removedFromDetailList);
    return [resultList,resultDetailList];
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      offerInfoDrag,
      detailsDrag,
      result.source.index,
      result.destination.index
    );
    handleDrag(items[0].map(el => {return el.id}));
    setofferInfoDrag(items[0]);
    setdetailsDrag(items[1]);
  }

  const getListStyle = isDraggingOver => ({
    display: 'flex',
    flexDirection: 'column',
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    background: isDragging ? colors.secondaryColor : null,
    ...draggableStyle,
  });
  if (isLoading===null){
    return null;
  }
  else if (isLoading===true){
    if (!isSnackbar) setIsSnackbar(true);
    return(
      <MyProgress />
    )
  }
  else if (isEmpty===true){
    return (<div className={classes.info} >
        <img className={classes.iconInfo} src={require(`../img/none.jpg`)} alt='none' />
        <span className={classes.text}>{translation.NONE[language]}</span>
      </div>
    )
  }
  else if (error===true){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.iconInfo} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (success===true && (offerInfo ? offerInfo.length===0 : false && details ? details.length===0 : false)){
      return (<div className={classes.info} >
            <img className={classes.iconInfo} src={require(`../img/none.jpg`)} alt='none' />
            <span className={classes.text}>{translation.NONE[language]}</span>
        </div>
      )
    }
    else{
      if(!offerInfoDrag || offerInfoDrag.length !== offerInfo.length) setofferInfoDrag(offerInfo);
      if(!detailsDrag || detailsDrag.length !== details.length) setdetailsDrag(details);
      if (offerInfoDrag && detailsDrag){
        return(
          <section className={classes.root} >
            <Snackbar 
                    text={translation.DRAGANDDROP[language]} 
                    vertical={'bottom'}
                    horizontal={'right'}
                    isOpen={isSnackbar}
                    close={setIsSnackbar}
          />
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable" direction="vertical">
                {(provided, snapshot) => (
                  <div className={classes.rootContent} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)} {...provided.droppableProps}>
                    {offerInfoDrag.map((el, key) => (
                      <Draggable key={el.id} draggableId={el.id} index={key}>
                        {(provided, snapshot) => (
                          <div ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}>
                            <OfferTemplate
                                key={key}
                                details={detailsDrag[key]}
                                offerInfo={el}
                                language={language}
                                operators={operators}
                                periods={periods}
                                types={types}
                                classes={classes}
                                handleDelete={handleDelete}
                                selectOffer={selectOffer}
                            />
                            </div>
                        )}
                      </Draggable>
                    ))}

                  {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </section>
        )}
        else{
          return null;
        }
    }
  }
};

  Compare.propTypes = {
  details: PropTypes.array,
  offerInfo: PropTypes.array,
  language: PropTypes.string,
  operators: PropTypes.object,
  periods: PropTypes.object,
  types: PropTypes.object,
  isLoading: PropTypes.bool,
  isEmpty: PropTypes.bool,
  handleDelete: PropTypes.func,
  selectOffer: PropTypes.func,
};
export default Compare;