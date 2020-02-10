import React, { useState, useEffect, useContext, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

import { LocationContext } from '../../context/LocationContext';
import Api from '../../services/Api';

const useStyles = makeStyles({
  summary: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  weatherImage: {
    marginRight: 15,
  },
  table: {
    width: '100%',
  },
});

const WeatherDetails = () => {
  const classes = useStyles();
  const context = useContext(LocationContext);
  const [weatherDetails, setWeatherDetails] = useState({});
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const formatDataIntoRows = (data) => {
    if (data) {
      const newRows = [];
      newRows.push({ name: 'Wind', value: getWindDetails(data.wind) });
      newRows.push({ name: 'Cloudiness', value: data.weather[0].description });
      newRows.push({ name: 'Atm. Pressure', value: `${data.main.pressure} hpa` });
      newRows.push({ name: 'Humidity', value: `${data.main.humidity}%` });
      newRows.push({ name: 'Sunrise', value: moment.unix(data.sys.sunrise).format('h:mm:ss a') });
      newRows.push({ name: 'Sunset', value: moment.unix(data.sys.sunset).format('h:mm:ss a') });
      newRows.push({ name: 'Geo Coords', value: `[ ${data.coord.lat}, ${data.coord.lon} ]` });

      setRows(newRows);
    } else {
      setRows([]);
    }
  };

  useEffect(() => {
    if (Object.keys(weatherDetails).length) {
      formatDataIntoRows(weatherDetails);
    }
  }, [weatherDetails]);

  const getWeatherDetails = useCallback(async () => {
    setIsLoading(true);
    const results = await Api.searchWeather(context.location);
    setWeatherDetails(results.data);
    setIsLoading(false);
  }, [context.location]);

  useEffect(() => {
    if (context.location) {
      getWeatherDetails();
    }
  }, [context.location, getWeatherDetails]);

  const getWindDetails = (wind) => {
    const description = getWindDescription(wind.speed);
    const direction = getWindDirection(wind.deg);
    return `${description}, ${wind.speed}m/s, ${direction} (${wind.deg})`;
  };

  const getWindDescription = (speed) => {
    switch (true) {
      case (speed < 4):
        return 'Gentle breeze';
      case (speed < 5):
        return 'Light breeze';
      case (speed < 7):
        return 'Fresh breeze';
      case (speed < 8):
        return 'Moderate breeze';
      case (speed < 15):
        return 'Windy';
      default:
        return 'Very Windy;'
    }
  };

  const getWindDirection = (deg) => {
    switch (true) {
      case (deg < 15 || deg > 345):
        return 'North';
      case (deg < 75):
        return 'North East';
      case (deg < 105):
        return 'East';
      case (deg < 165):
        return 'South East';
      case (deg < 195):
        return 'South';
      case (deg < 255):
        return 'South West';
      case (deg < 285):
        return 'North West';
      default:
        return ''
    }
  }

  console.log(weatherDetails);

  return (
    <>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : Object.keys(weatherDetails).length ? (
          <>
            <div className={classes.summary}>
              <img className={classes.weatherImage} src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`} alt="Weather representation" />
              <Typography variant="h4" gutterBottom>
                {weatherDetails.main.temp} &deg;C
              </Typography>
            </div>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : null
      }
    </>
  );
};

export default WeatherDetails;
