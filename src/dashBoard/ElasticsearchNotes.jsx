import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export default class ElasticsearchNotes extends Component {
    render() {

        var elasticnotes = this.props.sendNotes.map((key, index) => {
            return (
                <div key={key.noteId}>
                    <Card className="display-card"  style={{ backgroundColor: key.colour }}>
                        <div>

                            <div onClick={() => this.handleDialogOpen(key)}>
                                <CardContent className="textdisplay"  >{key.tittle}
                                </CardContent>
                                <CardContent className="textdisplay"  >{key.description}</CardContent>
                            </div>

                        </div>
                    </Card>
                </div>

            )
        })



        return (
            <div className="fullnotes">
                {elasticnotes}
            </div>
        )
    }
}