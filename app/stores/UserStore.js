import {register} from '../AppDispatcher';
import {EventEmitter} from 'events';

let users = [
                {
                    login: 'User1',
                    id: 10
                }
            ];

  const UserStore = Object.assign(EventEmitter.prototype,{
        emitChange: function(){
            this.emit('CHANGED');
        },
        addChangeListener: function(callback){
            this.on('CHANGED', callback);
        },
        removeChangeListener: function(callback){
            this.removeListener('CHANGED', callback);
        },
        getUsers: function(){
            return users;
        },
        getUserByLogin: function(loginName){
            let result = users.filter((u) => {
                return u.login === loginName;
            });
            return result.length === 0 ? null: result[0];
        },
        dispatcherIndex: register(function(payload){
            switch(payload.actionType){
                case 'USER_FETCHED':
                    users = payload.action;
                break;
                case 'ADD_USER': 
                    users = users.concat([payload.action]);
                break;
            }
            UserStore.emitChange();
        })
  });

  export default UserStore;