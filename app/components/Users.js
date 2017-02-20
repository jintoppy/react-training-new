import React, {Component} from 'react';
import {hashHistory} from 'react-router';

class Users extends Component {
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    onViewClick(user){
        this.props.setSelectedUser(user);
        hashHistory.push('/page2/'+ user.login);
    }
    render(){
        let userRows = this.props.users.map((u, index) => {
            return <tr key={index}>
                <td>{u.login}</td>
                <td>{u.id}</td>
                <td>
                    <button 
                        onClick={this.onViewClick.bind(this, u)}>
                    View
                    </button>
                </td>
            </tr>
        });
        return <div>Users
            <table>
                <thead>
                    <tr>
                        <th>Login</th>
                        <th>Id</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {userRows}
                </tbody>
            </table>

        </div>
    }
}
export default Users;
