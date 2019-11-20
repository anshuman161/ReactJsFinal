import React, { Component } from 'react'
import Dashboard from '../dashBoard/dashboard'
import Createnote from '../dashBoard/createnote'
import NotesLabel from '../dashBoard/NotesLabel'
export default class getNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            view: true,
            
        }
    }
    handleView=()=>{
        this.setState({
            view:!this.state.view
        })
    }
    render() {
        return (
            <div>
                 <Dashboard viewprop={this.handleView}/>
                 <Createnote/>
                 <NotesLabel viewProps={this.state.view} labelId={this.props.match.params.labelId}/>
            </div>
        )
    }
}
