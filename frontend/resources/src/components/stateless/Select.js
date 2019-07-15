import React from "react";
import PropTypes from "prop-types";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



function MySelect ({label, value, handleChange, data, loaded, placeholder}){
  
if (loaded === false){
  return(<p>{placeholder}</p>)
}  
  return(
  <FormControl style={{width: 150,}}>
                <InputLabel >{label}</InputLabel>
                <Select
                  value={value}
                  onChange= {handleChange}
                  inputProps={{
                    name: label,
                    id: label,
                  }}
                >
                  <MenuItem value="">
                    <em>Pomiń</em>
                  </MenuItem>
                  {data.map(el => (
                    <MenuItem value={el.value}>{el.value}</MenuItem>
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
  value: PropTypes.string.isRequired,
};
export default MySelect;