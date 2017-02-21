import React from 'react';
import Users from './Users';
import SelectedUser from './SelectedUser';
import AddUser from './AddUser';
import axios from 'axios';
import UserStore from '../stores/UserStore';
import {userFetched, addUser} from '../actions/UserActions';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: UserStore.getUsers(),
            selectedUser: {}
        };
        UserStore.addChangeListener(this.onChange.bind(this));
    }
    onChange(){
        let newUsers = UserStore.getUsers();
        this.setState({
            users: newUsers
        });
    }
    componentDidMount(){
        let promise = axios.get('https://api.github.com/users');
        promise.then((response) => {
            userFetched(response.data);
        });
    }
    addMyUser(newUserObj){
        addUser(newUserObj);
    }
    setSelectedUser(user){
        this.setState({
            selectedUser: user
        });
    }
    render(){
        return <div>
                This is the Content
                <Users 
                    users={this.state.users}
                    setSelectedUser={this.setSelectedUser.bind(this)} 
                    />
                <AddUser addUser={this.addMyUser.bind(this)} />
                <SelectedUser selectedUser={this.state.selectedUser} />
            </div>
    }
}

export default Content;
