import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

//Use a materials UI table

import Paper from '@material-ui/core/Paper'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from '@material-ui/core'

export default () => (
    <Table>
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

class uiTable extends Component {
  constructor() {
        super()
        this.state = { 
            fields: {}
      };//end state

    /*  onChange = updatedValue => {
        this.setState({
            fields:{
                ...this.state.fields,
                ...updatedValue
            }
        })
      }//end onChange */

    }//end constructor


    componentDidMount() {
        console.log("ScreenOne - Compoonent mounted - do we have a userid: ", this.props.userId );
          //this.getArticleData(this.props.userId);
        }

    

    render() {
           

        console.log("uiTable - store our alerts ");
     
        return (
            <div>

              Table goes here

            </div>
        )//end return

        function handleClick (){
            //cooper s - use jquery to open/close each items content....
            console.log("Something was clicked...");
        }//end handleItemClick

    }//end render

}//end Component

function mapStateToProps(state) {
        console.log("UITable - current state props: ", state );
        //console.log("Component One - Map Dispatch current props: ", state.state.data );
        return {
            data: state.mydata,
            screen: state.screen 
        };
    }
function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch )
}
    