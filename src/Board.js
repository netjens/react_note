import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Note from './Note'

class Board extends Component {

    static propTypes = {
        count: PropTypes.instanceOf(Number)
    }
 

    state = {
        notes: []
    }


    nextId(){
        this.uniqueId = this.uniqueId ? this.uniqueId : 0
        return ++this.uniqueId
    }
    add(text){
        let notes = [
            ...this.state.notes,{
                id: this.nextId(),note:text
            }
        ]
        this.setState({notes})
    }

    update (newText, id)  {
        let notes = this.state.notes.map(
            note => (note.id !== id)
                ? note : {
                    ...note,
                    note: newText
                }
        )
        this.setState({ notes })
    }
   
    remove (id){
        var notes = this.state.notes.filter(note => note.id !== id)
        this.setState({ notes })
    }



    eachNote (note)  {
        return (<Note key={note.id}
            id={note.id}
            onChange={this.update.bind(this)}
            onRemove={this.remove.bind(this)}>
            {note.note}

        </Note>)
    }

    render() {
        return (
            <div className='board'>
                {this.state.notes.map(this.eachNote.bind(this))}
                <button onClick={()=>this.add('new note')}>+</button>
            </div>
        )
    }

}

export default Board