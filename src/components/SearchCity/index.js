/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { LocationContext } from '../../context/LocationContext';
import Api from '../../services/Api';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  autoComplete: {
    width: 'calc(100% - 110px)'
  },
  textField: {
    marginBottom: 0,
  },
  buttonWrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SearchCity = () => {
  const context = useContext(LocationContext);
  const classes = useStyles();
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searchCities = async () => {
      if (searchTerm) {
        setIsLoading(true);
        // Fetch cities
        // const cities = await Api.searchCities(searchTerm);
        const cities = [];

        // Update state
        setCities(cities);
        setIsLoading(false);
      }
    };
    searchCities();
  }, [searchTerm]);

  const onSelectCity = ({ value }) => {
    context.setLocation(value);
  }

  const searchWeather = async () => {
    // const results = await Api.searchWeather(context.location);
    // Save the results to weather context
  };

  return (
    <div className={classes.wrapper}>
      <Autocomplete
        className={classes.autoComplete}
        freeSolo
        id="search-city"
        disableClearable
        options={cities.map(option => option.title)}
        onSelect={onSelectCity}
        renderInput={params => (
          <TextField
            {...params}
            label="Search City"
            margin="normal"
            variant="standard"
            fullWidth
            InputProps={{ ...params.InputProps, type: 'search' }}
            className={classes.textField}
          />
        )}
      />
      <div className={classes.buttonWrapper}>
        <Button onClick={searchWeather} variant="contained" color="primary" disabled={isLoading} style={{ width: 100 }}>
          Search
        </Button>
        {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
};

export default SearchCity;
