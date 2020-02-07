
import React, { useState } from 'react';

const LocationContext = React.createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('');

  return (
    <LocationContext.Provider
      value={{ location, setLocation }}
    >
      {children}
    </LocationContext.Provider>
  );
};

const LocationConsumer = LocationContext.Consumer;

export { LocationContext, LocationProvider, LocationConsumer };
