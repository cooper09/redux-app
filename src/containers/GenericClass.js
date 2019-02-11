import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'; 

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

function GenericClass(props) {

    const { alert, header } = props;
    console.log("Generic Class alert: ", alert.notification[0].name)

    return (
        <div>
            <h1> Generic Class 9</h1>
            {
               alert.notification.map((obj, i )=> {
                    console.log("can I read this array: ", obj.prop)
                     return <span key={i}>{obj.name} </span>
                }) 
            }
            <hr></hr>
            <Paper className="">
                <Table className="">
                <TableHead>
                    <TableRow style={{color: "black"}}>
                        {
                
                            header.map( (row, i) => 
                                <TableCell key={`thc-${i}`}>
                                {row.name}
                                </TableCell>
                            )
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                    /*    rows.map(row => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        </TableRow> 
                    )) */
                    
                    }
                    </TableBody>
                </Table>
                </Paper>
        
             <p>End</p>
         </div>
    )
}
GenericClass.propTypes = {
    classes: PropTypes.object.isRequired,
    headers: PropTypes.array,
    data: PropTypes.array 
};
export default GenericClass;