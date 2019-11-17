import React from "react";
import PropTypes from "prop-types";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import translation from "../translation"

const useStyles = makeStyles({
  formControl: {
    width: '90%',
  },
  formControlBig: {
    width: '90%',
  },
});


export function MultipleSelect ({label, value, handleChange, data, language}){

  const classes = useStyles();

  if (data.isLoading === true){
    return(
          <FormControl className={classes.formControl}>
            <InputLabel >{label}</InputLabel>
            <Select
            value={-1}
            >
                <MenuItem key={-1} value={-1}>
                    <ListItemText primary={translation.LOADING[language]} />
                </MenuItem>
            </Select>     
          </FormControl>
    )
  }
  else if (data.success === false){
    return(
          <FormControl className={classes.formControl}>
              <InputLabel >{label}</InputLabel>
              <Select
              value={-1}
              >
                  <MenuItem key={-1} value={-1}>
                      <ListItemText primary={translation.DOWNLOAD_ERROR[language]} />
                  </MenuItem>
              </Select>     
          </FormControl>
    )
  }  
  else if (data.success === true){
      return ( 
          <FormControl className={classes.formControl}>
                      <InputLabel >{label}</InputLabel>
                      <Select
                        multiple
                        value={value}
                        onChange= {handleChange}
                        renderValue={selected => {
                          let selectedValue = [];
                          for (let el of (data.data.filter((el) => {return selected.includes(el.id)}))){
                            selectedValue.push(el[`value_${language}`]);
                          };
                          return selectedValue.join(', ');
                        }}
                      >
                        {data.data.map(el => (
                          <MenuItem key={el.id} value={el.id}>
                              <Checkbox checked={value.indexOf(el.id) > -1} />
                              <ListItemText primary={el[`value_${language}`]} />
                          </MenuItem>
                        ))}
                      </Select>     
          </FormControl> 
      )
  }
  else{
    return ( null )
  }
}


export function SingleSelect ({label, value, handleChange, data, language}){

  const classes = useStyles();

  if (data.isLoading === true){
    return(
          <FormControl className={classes.formControl}>
              <InputLabel >{label}</InputLabel>
              <Select
              value={-1}
              >
                  <MenuItem key={-1} value={-1}>
                      <ListItemText primary={translation.LOADING[language]} />
                  </MenuItem>
              </Select>     
          </FormControl>
    )
  }
  else if (data.success === false){
    return(
      <FormControl className={classes.formControl}>
          <InputLabel >{label}</InputLabel>
          <Select
          value={-1}
          >
              <MenuItem key={-1} value={-1}>
                  <ListItemText primary={translation.DOWNLOAD_ERROR[language]} />
              </MenuItem>
          </Select>     
      </FormControl>
  )
  }  
  else if (data.success === true){
    return ( 
      <FormControl className={classes.formControlBig}>
        <InputLabel >{label}</InputLabel>
        <Select
          value={value}
          onChange= {handleChange}
        >
          {data.data.map(el => (
            <MenuItem key={el.id} value={el.id}>
                <ListItemText primary={el.value} />
            </MenuItem>
          ))}
        </Select>     
      </FormControl> 
    )
  }
  else{
    return (null)
  }
};


MultipleSelect.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array,
};

SingleSelect.propTypes = {
  data: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.array,
};
