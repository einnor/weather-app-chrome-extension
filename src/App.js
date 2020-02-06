import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Nav from './components/Nav';
import SearchCity from './components/SearchCity';
import CustomTabPanels from './components/CustomTabPanels';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  subRoot: {
    width: 400,
    // flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  content: {
    padding: 10,
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.subRoot}>
        <Nav />
        <div className={classes.content}>
          <SearchCity />
          <CustomTabPanels />
        </div>
      </div>
    </div>
  );
};

export default App;
