import { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from '../Taskboard/index';
import theme from '../../commons/Theme';
import styles from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
