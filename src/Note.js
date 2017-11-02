import React, { Component } from 'react';


class Note extends Component {

    state = { editing: false }


    edit = () => {
        this.setState({ editing: true })
    }

    save = () => {
       this.props.onChange(this.refs.newText.value, this.props.id)
       this.setState({editing : false})
    }

    remove = () =>{
        this.props.onRemove(this.props.id)
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