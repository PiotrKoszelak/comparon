import React from "react";
import PropTypes from "prop-types";
import key from "weak-key";

function Table  ({ loaded, placeholder, data, operator, city}){
  if (loaded === false){
    return(<p>{placeholder}</p>)
  }  
  if (data.length == false){
    return (<p>Nothing to show</p>)
  }

  // filtering
  let dataNew = [];
  for (let i=0; i<data.length; i++) {
    if (operator=='' && city=='') dataNew.push(data[i]);
    else {
      operator == '' ? data[i].city == city ? dataNew.push(data[i]) : {} : {};
      city == '' ? data[i].operator == operator ? dataNew.push(data[i]) : {} : {};
      (city !='' && operator !='') ? (data[i].operator==operator && data[i].city == city) ? dataNew.push(data[i]) : {} : {};
  }};

    return(
    <div style={{clear: 'both', marginTop: 20,}}>
      <h2 className="subtitle">
        Showing <strong>{data.length} items</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(data[0]).map(el => <th key={key(el)}>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataNew.map(el => (
              <tr key={el.id}>
                {Object.entries(el).map(el => <td key={key(el)}>{el[1]}</td>)}
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
export default Table;