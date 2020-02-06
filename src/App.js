import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/Nav';
import SearchCity from './components/SearchCity';
import CustomTabPanels from './components/CustomTabPanels';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    padding: 10,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <div className={classes.content}>
        <SearchCity />
        <CustomTabPanels />
      </div>
    </div>
  );
};

export default App;
