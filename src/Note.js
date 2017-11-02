import React, { Component } from 'react';


class Note extends Component {

    state = { editing: false }




    edit (){
        this.setState({ editing: true })
    }

    save (){
       this.props.onChange(this.refs.newText.value, this.props.id)
       this.setState({editing : false})
    }

    remove (){
        this.props.onRemove(this.props.id)
    }

    componentWillMount(){
        this.style = {
            right: this.randomBetween(0,window.innerWidth - 150, 'px'),
            top: this.randomBetween(0,window.innerHeight - 150,'px')
        }
        
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.children !== nextProps.children || this.state !== nextState
    }


    componentDidUpdate(){
        if(this.state.editing){
            this.refs.newText.focus()
            this.refs.newText.select()

        }
    }

    randomBetween(x,y,s){
        return (x+Math.ceil(Math.random()*(y-x)))+s
    }

    renderEditNote() {
        return (
            <div className="note" style={this.style}>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <button onClick={this.save.bind(this)}>SAVE</button>
            </div>
        )
    }

    renderDisplayNote() {
        return (
            <div className="note" style={this.style}>
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit.bind(this)}>Edit</button>
                    <button onClick={this.remove.bind(this)}>X</button>
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