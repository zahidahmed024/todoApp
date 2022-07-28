import { combineReducers } from 'redux';
import authReducer from './auth';
import taskReducer from './task';
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage';


const authPersistConfig = {
    key: 'auth',
    storage: localStorage,
}
const taskPersistConfig = {
    key: 'task',
    storage: localStorage,
}

const appReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    task: persistReducer(taskPersistConfig, taskReducer),
})


export default appReducer;