import React, { Component } from 'react';
import Dashboard from '../dashBoard/dashboard';
import Archive from '../dashBoard/archive'

export default class getArchive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            view: true,
            ITEM_HEIGHT : 48,
            anchorEl:'', 
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
               <Archive viewprop={this.state.view}/>
            </div>
        )
    }
}
