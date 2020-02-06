import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CustomTabPanels from './components/CustomTabPanels';
import Nav from './components/Nav';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
      <CustomTabPanels />
    </div>
  );
};

export default App;
