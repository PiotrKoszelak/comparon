import React from "react";
import PropTypes from "prop-types";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';



function MySelect ({label, value, handleChange, data, loaded, placeholder}){
  
if (loaded === false){
  return(<p>{placeholder}</p>)
}  
  return(
  <FormControl style={{width: 150,}}>
                <InputLabel >{label}</InputLabel>
                <Select
                  multiple
                  value={value}
                  onChange= {handleChange}
                  renderValue={selected => selected.join(', ')}
                >
                  {data.map(el => (
                    <MenuItem key={el.value} value={el.value}>
                        <Checkbox checked={value.indexOf(el.value) > -1} />
                        <ListItemText primary={el.value} />
                    </MenuItem>
                  ))}
                </Select>

          


    </FormControl>
)};

MySelect.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
};
export default MySelect;