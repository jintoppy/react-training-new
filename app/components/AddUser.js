import React, {Component} from 'react';

class AddUser extends Component {
    constructor(props){
        super(props);
    }
    onBtnClick(){
        console.log(this.refs.name);
        let newUser = {
            login: this.refs.login.value,
            id: this.refs.id.value
        };
        this.props.addUser(newUser);
        
    }
    render(){
        return <div>
            <div>
                <label>Name</label>
                <input ref="login" />
            </div>
            <div>
                <label>Age</label>
                <input type="number" ref="id" />
            </div>
            <button onClick={this.onBtnClick.bind(this)}>
                Add User
            </button>
        </div>
    }
}

export default AddUser;