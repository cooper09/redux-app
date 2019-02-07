import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import convertData from '../utils/convertData'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function selectAlert(e) {
  event.preventDefault();
  console.log("clicked: ", e.target.id );
  var element = document.getElementById(e.target.id);
  element.classList.toggle("selectedRow");
}

function row ( x,i, header) {
  console.log('uiTable - Create a row x: ', x, " i: ", i, " headers: ", header );
  const dataArr = x;
  return (<TableRow key={`tr-${i}`}>
    {
      x.map((y,k) => (
        <TableCell key={`trc-${k}`} onClick={selectAlert.bind(this)} className="newRow" id="thisAlert">
           {y.name}
        </TableCell>
      ))
    }
  </TableRow>
  )}


function SimpleTable(props) {

  const { classes } = props;
  const { headers } = props;
  const { data } = props;
  const { alert } = props;

  console.log("SimpleTable headers: ", headers );
  console.log("SimpleTable data: ", data );
  console.log("SimpleTable alert: ", alert );
  console.log("SimpleTable alert type: ", typeof(alert) );

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow >
            {
              headers.map( (x, i) => 
                <TableCell key={`thc-${i}`}>
                  {x.name}
                </TableCell>
              )
            }
          </TableRow>
        </TableHead>
        <TableBody>

          { 
            data.map((x, i) => row(x,i, headers))
          } 
            <TableRow>
             <TableCell>End of Table</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  headers: PropTypes.array,
  data: PropTypes.array
};

export default withStyles(styles)(SimpleTable);