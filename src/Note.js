import React, { Component } from 'react';


class Note extends Component {

    state = { editing: false }


    edit = () => {
        this.setState({ editing: true })
    }

    save = () => {
        var val = this.refs.newText.value
        alert('Later we will save this value' + val)
        this.setState({ editing: false })
    }

    renderEditNote() {
        return (
            <div className="note">
                <textarea ref="newText"></textarea>
                <button onClick={this.save}>SAVE</button>
            </div>
        )
    }

    renderDisplayNote() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}>Edit</button>
                    <button onClick={this.remove}>X</button>
                </span>

            </div>
        )
    }

    render() {
        
            if(this.state.editing){
                return this.renderEditNote()
            }else{
                return this.renderDisplayNote()
            }
    }
}


export default Note