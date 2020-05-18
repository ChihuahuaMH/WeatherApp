import React from 'react';
import '../asset/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as RainIcon } from '../asset/images/rain.svg';
import { ReactComponent as HumIcon } from '../asset/images/humidity.svg';
import { ReactComponent as WindIcon } from '../asset/images/wind.svg';

const useStyles = makeStyles({
  mt: {
    marginTop: '10px'
  },
  svgIcon: {
    width: '30%',
    height: '30%',
  },
  align: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});

function WeatherCard() {
  const classes = useStyles();

  return (
    <Card className="card-size">
      <CardContent>
        <Typography variant="h4">
          台中市
        </Typography>

        <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
          多雨多雲
        </Typography>

        <Grid container>
          <Grid item xs={12} sm={6} style={{display:'flex'}}>
            <Typography variant="h1">
              25
            </Typography>
            <Typography variant="h4">
              °C
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <Typography variant="h1">
              ⛅
            </Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.align} style={{marginTop:'10px'}}>
          <Grid item xs={12} sm={12} md={4}>
            <HumIcon className={classes.svgIcon} />
            <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
              100%
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RainIcon className={classes.svgIcon} />
            <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
              100%
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WindIcon className={classes.svgIcon} />
            <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
              100m/h
            </Typography>
          </Grid>
        </Grid>



      </CardContent>
    </Card>
  );
}

export default WeatherCard;
