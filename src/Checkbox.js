
        var Checkbox = React.createClass({
            getInitialState() {//getIntialState ist notwendig wenn man mit React.createClass arbeitet, sonst kommt es in den Konstruktor
                return {checked: true}
            },
            handleCheck() {
                this.setState({checked: !this.state.checked})
            },
            render() {
                var msg
                if(this.state.checked) {
                    msg = "checked"
                } else {
                    msg = "unchecked"
                }
                return ( <div>
                        <input type="checkbox" 
                               onChange={this.handleCheck}
                               defaultChecked={this.state.checked}/>
                        <p>This box is {msg}</p>
                    </div>)
            }
        })