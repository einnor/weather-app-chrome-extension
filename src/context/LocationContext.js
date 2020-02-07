
import React, { useState } from 'react';

export const LocationContext = React.createContext();

const LocationProvider = () => {
  const [location, setLocation] = useState('');

  return (
    <LocationContext.Provider
      value={{ location, setLocation }}
    >
      {this.props.children}
    </LocationContext.Provider>
  );
};

export const LocationConsumer = LocationContext.Consumer;

export default { LocationContext, LocationProvider, LocationConsumer };
