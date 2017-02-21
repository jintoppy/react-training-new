import React, {Component} from 'react';
import UserStore from '../stores/UserStore';

class Page2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            userDetails: UserStore.getUserByLogin(this.props.params.userName)
        };
    }
    render(){
        let user = this.state.userDetails;
        let content;
        if(user){
            content = <div>
                    <h2>{user.url}</h2>
                    <h2>{user.repos_url}</h2>
            </div>
            
        }
        else{
            content = <span>No User </span>
        }
        return <div>
                    This is Page2 for {this.props.params.userName}
                    {content}
                </div>
    }
}

export default Page2;