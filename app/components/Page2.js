import React, {Component} from 'react';

class Page2 extends Component{
    render(){
        return <div>This is Page2 for {this.props.params.userName}</div>
    }
}

export default Page2;