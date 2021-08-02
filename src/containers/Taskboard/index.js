import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';
import styles from './styles';

const listTasks = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read Material UI',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Football',
    description: 'With my Friend',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'Play',
    status: 1,
  },
];
class Taskboard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status) => {
          const taskFilter = listTasks.filter(
            (task) => task.status === status.value,
          );
          return (
            <TaskList key={status.value} tasks={taskFilter} status={status} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  renderForm() {
    let xhtml = null;
    const { open } = this.state;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Add New Tasks
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
