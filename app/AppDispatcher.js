import {Dispatcher} from 'flux';

let flux = new Dispatcher();

export function dispatch(payload){
    flux.dispatch(payload);
} 

export function register(callback){
    flux.register(callback);
}