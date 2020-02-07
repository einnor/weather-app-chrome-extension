import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

const data = {
  coord: {
    lon: 36.82,
  lat: -1.28
  },
  weather: [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d"
    }
  ],
  base: "stations",
  main: {
    temp: 298.02,
    feels_like: 293.05,
    temp_min: 296.48,
    temp_max: 299.15,
    pressure: 1022,
    humidity: 36
  },
  visibility: 10000,
  wind: {
    speed: 6.7,
    deg: 50
  },
  clouds: {
    all: 20
  },
  dt: 1581071499,
  sys: {
    type: 1,
    id: 2543,
    country: "KE",
    sunrise: 1581046918,
    sunset: 1581090702
  },
  timezone: 10800,
  id: 184745,
  name: "Nairobi",
  cod: 200
};


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
  const [rows, setRows] = useState([]);

  useEffect(() => {
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
    }
  }, []);

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

  return (
    <>
      <div className={classes.summary}>
        <img className={classes.weatherImage} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather representation" />
        <Typography variant="h4" gutterBottom>
          {data.main.temp} &deg;C
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
  );
};

export default WeatherDetails;
