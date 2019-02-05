import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from "@material-ui/core";

  export default function  uiTable () {

        console.log("Generic Class...")


const  zits = () =>(        <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>One</TableHeaderColumn>
                        <TableHeaderColumn>TableRowColumn</TableHeaderColumn>
                        <TableHeaderColumn>Three</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableRowColumn>Hello</TableRowColumn>
                        <TableRowColumn>There</TableRowColumn>
                        <TableRowColumn>World</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn>Time</TableRowColumn>
                        <TableRowColumn>To</TableRowColumn>
                        <TableRowColumn>Boogie</TableRowColumn>
                    </TableRow>
                </TableBody>
           </Table>
        )

        return (   
            <h3>These are the times to try men's sould </h3>  
            
        )  
}
