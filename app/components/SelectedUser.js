import React from 'react';

const SelectedUser = (props) => {
    let content;
    if(props.selectedUser.name){
        content = <span>Selected User is {props.selectedUser.name}</span>
    }
    else{
        content = <span>No User Selected</span>
    }
    return <div>
        {content}
    </div>
};

export default SelectedUser;