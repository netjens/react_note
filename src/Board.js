import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Note from './Note'

class Board extends Component {

    static propTypes = {
        count: PropTypes.instanceOf(Number)
    }

    state = {
        notes : [
            {id: 0, note:'Call Bob'},
            {id: 1, note: 'Email Sarah'},
            {id: 2, note: 'Eat lunch'},
            {id:3, note: 'Finish proposal'}]
    }

    update = (newText, id) => {
        let notes = this.state.notes.map(
            note => (note.id !== id) 
            ? note :{
                ...note,
                note: newText
            }
        )
        this.setState({notes})
    }
    render() {
        return (
            <div className='board'>
                {this.state.notes.map((note,i) => {
                    return <Note key={i}>{note}</Note>
                } )}
            </div>
        )
    }

}

export default Board