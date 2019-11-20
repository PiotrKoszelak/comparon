import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"
import DetailTemplate from './Detail_template';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CircularProgress from '@material-ui/core/CircularProgress';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Snackbar from './Snackbar'


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
                  isLoading,
                  isEmpty,
                  handleDelete,
                  handleDrag,
                  selectOfferInComparison,
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
    overflow: 'auto',
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    background: isDragging ? 'lightgreen' : null,
    ...draggableStyle,
  });
  if (isLoading===null){
    return null;
  }
  else if (isLoading===true){
    if (!isSnackbar) setIsSnackbar(true);
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
  else if (error===true){
    return(
      <div className={classes.info}>
          <ErrorOutlineIcon color='secondary' className={classes.icon} />
          <span className={classes.text}>{translation.DOWNLOAD_ERROR[language]}</span>
      </div>
    )
  }
  else{
    if (success===true && (offerInfo ? offerInfo.length===0 : false && details ? details.length===0 : false)){
      return (<div className={classes.info} >
        <LocalOfferIcon color='secondary' className={classes.icon} />
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
            <div style={{overflowX: 'none !important'}}>
                <DetailTemplate
                            withoutIcon={false}
                            withoutText={true}
                            enableButton={false}
                            enableDelete={false}
                            classes={classes}
                            language={language}
                            offerInfo={{}}
                            details={{}}
                            operators={operators}
                            periods={periods}
                            types={types}
                />
            </div>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable" direction="horizontal">
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
                            <DetailTemplate
                                key={key}
                                enableDelete={true}
                                withoutIcon={true}
                                withoutText={false}
                                enableButton={true}
                                details={detailsDrag[key]}
                                offerInfo={el}
                                language={language}
                                operators={operators}
                                periods={periods}
                                types={types}
                                classes={classes}
                                handleDelete={handleDelete}
                                selectOfferInComparison={selectOfferInComparison}
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
  selectOfferInComparison: PropTypes.func,
};
export default Compare;