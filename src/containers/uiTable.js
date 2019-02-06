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

let id = 0;
function createData(name, calories, fat, carbs, stinky) {
  id += 1;
  return { id, name, calories, fat, carbs, stinky };
}

const rows = [
  createData('Frozen yoghurt goodies', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function row ( x,i, header) {
  console.log('Create a row x: ', x, " i: ", i, " headers: ", header );
  const dataArr = x;
  return (<TableRow key={`tr-${i}`}>
    {
      x.map((y,k) => (
        <TableCell key={`trc-${k}`}>
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
  console.log("SimpleTable alert: ", alert);

  if (alert.result  != undefined ) {
    console.log("Yumpin Yimminy!");

  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {
              headers.map( (x, i) => 
                <TableCell key={`thc-${i}`} >
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