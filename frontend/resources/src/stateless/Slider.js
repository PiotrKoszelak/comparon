import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container : {
    display: 'flex',
    justifyContent: 'space-between',
  },
  slider: {
    position: 'relative',
    left: '5%',
    width: '60%',
  },
  input: {
    width: '25%',
    position: 'relative',
    bottom: 15,
  },
});

function MySlider({title, value, handleChange, maxValue, handleSliderChange}) {
  const classes = useStyles();

  const handlerChangeSlider = (event, newValue) => {
      handleSliderChange(parseInt(newValue));
  }

  return (
    <div className={classes.root}>
          <Typography id="input-slider" gutterBottom>
            {title}
          </Typography>
          <div className={classes.container}>
              <Slider
                className={classes.slider}
                value={value}
                onChange={handlerChangeSlider}
                aria-labelledby="input-slider"
                max={Number(maxValue)}
              />
              <Input
                className={classes.input}
                value={value}
                margin="dense"
                onChange={handleChange}
                inputProps={{
                  step: 10,
                  type: 'number',
                  'aria-labelledby': 'input-slider',
                }}
              />
          </div>
    </div>
  );
}

Slider.propTypes = {
  title: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.number,
  maxValue: PropTypes.number,
  handleSliderChange: PropTypes.func,
};
export default MySlider;