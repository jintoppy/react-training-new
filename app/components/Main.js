import React from 'react';
import Header from './Header';


class Main extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div>
                <Header />
                    {this.props.children}
                This is the main app
                
            </div>
    }
}

Main.propTypes = {
    myTitle: React.PropTypes.object
};

export default Main;

