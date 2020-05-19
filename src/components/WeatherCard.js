import React, { useState } from 'react';
import '../asset/App.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as RainIcon } from '../asset/images/rain.svg';
import { ReactComponent as HumIcon } from '../asset/images/humidity.svg';
import { ReactComponent as WindIcon } from '../asset/images/wind.svg';

const useStyles = makeStyles({
  mt: {
    marginTop: '10px',
    marginBottom: '20px',
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

const WeatherCard = () => {
  const [currentWeather, setCurrentWeather] = useState({
    observationTime: '2020-05-19 16:00:00',
    locationName: '臺中市',
    description: '多雲多雨',
    temperature: 27.5,
    windSpeed: 0.3,
    humid: 0.55,
  });
  const classes = useStyles();

  return (
    <Card className="card-size">
      <CardContent>
        <Typography variant="h4">
          {currentWeather.locationName}
        </Typography>

        <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
          {new Intl.DateTimeFormat('zh-TW', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(currentWeather.observationTime))}
          {'  '}
          {currentWeather.description}
        </Typography>

        <Grid container>
          <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
            <Typography variant="h1">
              {Math.round(currentWeather.temperature)}
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

        <Grid container className={classes.align} style={{ marginTop: '10px' }}>
          <Grid item xs={12} sm={12} md={4}>
            <HumIcon className={classes.svgIcon} />
            <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
              {Math.round(currentWeather.humid * 100)} %
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <RainIcon className={classes.svgIcon} />
            <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
              0 %
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <WindIcon className={classes.svgIcon} />
            <Typography variant="subtitle1" className={classes.mt} color="textSecondary">
              {currentWeather.windSpeed} m/h
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default WeatherCard;
