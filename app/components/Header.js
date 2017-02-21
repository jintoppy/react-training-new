import React,{Component} from 'react';
import {Link} from 'react-router';
import UserStore from '../stores/UserStore';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: UserStore.getUsers()
        };
        UserStore.addChangeListener(this.onChange.bind(this));
    }
    onChange(){
        let newUsers = UserStore.getUsers();
        this.setState({
            users: newUsers
        });
    }
    render(){
        return <div>
            This is the header
            <Link to="/">HOme</Link>
            Total User Count is {this.state.users.length}
        </div>
    }
}

export default Header;
