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


export function MultipleSelect ({label, value, handleChange, data, isLoaded, language}){

  const classes = useStyles();
  if (isLoaded === false){
    return(<FormControl className={classes.formControl}>
              <InputLabel >{label}</InputLabel>
              <Select
              value={-1}
              >
                  <MenuItem key={-1} value={-1}>
                      <ListItemText primary={translation.DOWNLOAD_ERROR[language]} />
                  </MenuItem>
              </Select>     
          </FormControl>)
  }  
  else {
      return ( <FormControl className={classes.formControl}>
                      <InputLabel >{label}</InputLabel>
                      <Select
                        multiple
                        value={value}
                        onChange= {handleChange}
                        renderValue={selected => {
                          let selectedValue = [];
                          for (let el of (data.filter((el) => {return selected.includes(el.id)}))){
                            selectedValue.push(el[`value_${language}`]);
                          };
                          return selectedValue.join(', ');
                        }}
                      >
                        {data.map(el => (
                          <MenuItem key={el.id} value={el.id}>
                              <Checkbox checked={value.indexOf(el.id) > -1} />
                              <ListItemText primary={el[`value_${language}`]} />
                          </MenuItem>
                        ))}
                      </Select>     
          </FormControl> )}
};


export function SingleSelect ({label, value, handleChange, data, isLoaded, language}){

  const classes = useStyles();
  if (isLoaded === false){
    return(<FormControl className={classes.formControl}>
              <InputLabel >{label}</InputLabel>
              <Select
              value={-1}
              >
                  <MenuItem key={-1} value={-1}>
                      <ListItemText primary={translation.DOWNLOAD_ERROR[language]} />
                  </MenuItem>
              </Select>     
          </FormControl>)
  }  
  else {
    return ( 
      <FormControl className={classes.formControlBig}>
        <InputLabel >{label}</InputLabel>
        <Select
          value={value}
          onChange= {handleChange}
        >
          {data.map(el => (
            <MenuItem key={el.id} value={el.id}>
                <ListItemText primary={el.value} />
            </MenuItem>
          ))}
        </Select>     
      </FormControl> )}
};


MultipleSelect.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  value: PropTypes.array,
};

SingleSelect.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  value: PropTypes.array,
};
