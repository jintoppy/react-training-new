import React,{Component} from 'react';
import {Link} from 'react-router';

class Header extends Component{
    render(){
        return <div>
            This is the header
            <Link to="/">HOme</Link>
        </div>
    }
}

export default Header;
