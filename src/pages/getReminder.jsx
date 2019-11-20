import React, { Component } from 'react'
import Dashboard from '../dashBoard/dashboard'
import ShowReminders from '../dashBoard/showReminders';
export default class getReminder extends Component {
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
                <ShowReminders viewprop={this.state.view}/>
            </div>
        )
    }
}
