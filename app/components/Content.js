import React from 'react';
import Users from './Users';
import SelectedUser from './SelectedUser';
import AddUser from './AddUser';
import axios from 'axios';

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [
                {
                    login: 'User1',
                    id: 10
                }
            ],
            selectedUser: {}
        };
    }
    componentDidMount(){
        let promise = axios.get('https://api.github.com/users');
        promise.then((response) => {
            this.setState({
                users: response.data
            });
        });
    }
    addMyUser(newUserObj){
        let users = this.state.users;
        let newUsers = users.concat([newUserObj]);
        this.setState({
            users: newUsers
        });
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
