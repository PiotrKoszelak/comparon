import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles({
  root: {
    width: 150,
  },
  input: {
    width: 50,
  },
});

function MySlider({title, value, handleChange, maxValue, handleSliderChange}) {
  const classes = useStyles();

  const handlerChangeSlider = (event, newValue) => {
      handleSliderChange(newValue);
  }

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value}
            onChange={handlerChangeSlider}
            aria-labelledby="input-slider"
            max={Number(maxValue)}
          />
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
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