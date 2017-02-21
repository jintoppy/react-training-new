import {dispatch} from '../AppDispatcher';

export function userFetched(response){
    dispatch({
        actionType: 'USER_FETCHED',
        action: response
    });
}

export function addUser(user){
    dispatch({
        actionType: 'ADD_USER',
        action: user
    });
}