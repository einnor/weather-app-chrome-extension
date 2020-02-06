/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

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
  }
}));

const SearchCity = () => {
  const classes = useStyles();
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchCity = async () => {
    if (searchTerm) {
      // Fetch cities and update state
    }
  }

  return (
    <div className={classes.wrapper}>
      <Autocomplete
        className={classes.autoComplete}
        freeSolo
        id="search-city"
        disableClearable
        options={cities.map(option => option.title)}
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
      <Button onClick={searchCity} variant="contained" color="primary" style={{ width: 100 }}>
        Search
      </Button>
    </div>
  );
};

export default SearchCity;
