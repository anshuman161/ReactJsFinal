import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { InputBase } from '@material-ui/core';
import {getNotes, updateNote} from '../services/noteservice';
import { deleteLabel, deleteLabelOnNotes } from '../services/labelservice';
import Chip from '@material-ui/core/Chip';
import DownBar from '../dashBoard/downbar'

export default class NotesLabel extends Component {
    constructor(props){
        super(props);
        this.state = {
          allNotes:[],
          noteId:'',
          tittle:'',
          description:'',
          updateNoteId:'',
          doescheckfield:false,
        }
            }
            componentDidMount() {
             this.getAllNotes();
         };
        
         getAllNotes = () =>{
            getNotes(localStorage.getItem('token')).then(res => {
            console.log('all notes are' + res.data);
            this.setState({
             doescheckfield:false,
             allNotes: res.data,
             open:'false',
             setOpen:'false'
            });
        }).catch((err) => {
                console.log('error ' + err);
            })
         }
        
         handleTitle = (event) => {
            this.setState({
              tittle: event.target.value
            })
        }
        
        handleDescription = (event) => {
            this.setState({
                description: event.target.value
            })
        }
        openDialog =(object)=>{
          console.log('noteid----------',object.noteId)
          this.setState({
            updateNoteId:object.noteId,
            doescheckfield:!this.state.doescheckfield,
            tittle:object.tittle,
            description:object.description
           })
        } 
        closeDialog=()=>{
          this.setState({
            doescheckfield:!this.state.doescheckfield,
           })
        }
        handleSubmit = (object) => {
          
        this.setState({
          doescheckfield:!this.state.doescheckfield
        })
              let data={
                  "tittle":this.state.tittle,
                  "description": this.state.description,
              }
              updateNote(this.state.updateNoteId,data).then(res=>{
                window.location.reload();
             
              console.log('11111----',object.noteId);
              
                  console.log("Response after hitting login api is ",res);
              
              }).catch(err=>{
                  console.log("Error after hitting login api  ",err);
                
              })
        }
         
        handleLabelDelete = (labelId,noteId) => 
          { 
            deleteLabelOnNotes(labelId,noteId).then(res => {
                this.getAllNotes();
          
            console.log('delete label -- labelid' + labelId);
            console.log('delete note -- noteid' + noteId);
            
          }).catch((err) => {
            console.log('error ' + err);
          })
          }
        render(){
           
        console.log("view porps---", this.props.viewProps);
        const cardView = this.props.viewProps ? "display-card" : "list-view"
        
          let displayAllNotes = this.state.allNotes.map((object,index) => {    
            console.log(object); 
            return (
            
              
         <div>

     <div>
     {object.labelList.map((key) => {
console.log(key.labelId ,parseInt(this.props.labelId));
                            return (
                            <div object={key.labelId}>{key.labelId !== parseInt(this.props.labelId )? '' :
                <Card className={cardView}  style={{backgroundColor:object.colour}}> 
                 <div>
                 <CardContent onClick={()=>this.openDialog(object)}>
                 <div>
                    <input style={{border:'none',outline:'none',width:'250px',backgroundColor:object.colour}} type="text" 
                     value={object.tittle} onChange={this.handleTitle} />
                 </div>
                    <br/>
                  <div>
                   
                      <InputBase multiline style={{width:'250px',marginTop:'10px',border:'none', outline:'none', backgroundColor:object.colour}} 
                    value={object.description} onChange={this.handleDescription}/>
                  </div>
                    <br/>
                    <div className="chiplabel">
                 {object.labelList.map((object1) => {
                    return (
                      <div key={object1.labelId}>
                        {object1 === '' ? null :
                          <Chip
                            label={object1.labelName}
                            variant="outlined"
                            onDelete={() => {this.handleLabelDelete(object1.labelId,object.noteId)}}
                          />
                        }
                      </div>
                    )  
                  }
                  )}
                </div>
                <br/>
                <div key={object.noteId}>
                {object.remindme === null ? null :
                         <Chip size="small" label={object.remindme} 
                         onDelete={()=>this.handleReminderDelete(object.noteId)}
                         /> 
                }
                      </div>
                    </CardContent>
                    <div>
                    <DownBar noteId={object.noteId}  sendstatus={this.handlefresh}  handlecolorstatus={this.handlecolor}/>
                    </div>
                    </div>  
                    </Card>
                       }
                       </div>);

                   })}
               </div>

              
                    </div>
            )
                
        })
        return (
          <div>
           <div className="note-div">
             {displayAllNotes}
           </div>
        </div>
        );
        }
}