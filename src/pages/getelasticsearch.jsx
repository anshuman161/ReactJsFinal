import React, { Component } from 'react'
import Dashboard from '../dashBoard/dashboard';
import ElasticsearchNotes from '../dashBoard/ElasticsearchNotes';
import { withRouter } from 'react-router-dom';
 class elasticSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elasticSearchNotes: [],
        }
    }

    modi = (notes) => {
        this.setState({
            elasticSearchNotes: notes
        })
    }

    render() {
        console.log(this.state.elasticSearchNotes)
        return (
            <div>
                  <Dashboard headerToSearchGetNote={this.modi}/>
<ElasticsearchNotes sendNotes={this.state.elasticSearchNotes} />
            </div>
        )
    }
}
export default withRouter(elasticSearch)