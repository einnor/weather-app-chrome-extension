import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import VerticalAlignBottomIcon from '@material-ui/icons/VerticalAlignBottom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const WeatherDetails = () => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CalendarTodayIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Date" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WhatshotIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Temperature" secondary="14.4 &deg;C" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TrendingUpIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="High" secondary="14.95 &deg;C" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TrendingDownIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Low" secondary="14.1 &deg;C" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <VerticalAlignBottomIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Air Pressure" secondary="1023.75 mb" />
      </ListItem>
    </List>
  );
};

export default WeatherDetails;
