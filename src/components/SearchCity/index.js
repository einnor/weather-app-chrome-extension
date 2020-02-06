/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';

const SearchCity = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const searchCity = async () => {
    if (searchTerm) {
      // Fetch cities and update state
    }
  }

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
      <Autocomplete
        style={{ width: 'calc(100% - 110px)' }}
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
            style={{ marginBottom: 0 }}
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
