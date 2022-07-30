import { DELETE, POST, PUT } from '../../utils/ApiCaller';
import * as actions from './actionCreators';

export const getTodo = (data) => {
    return async dispatch => {
        dispatch({
            type: actions.ADD_TASK,
            payload: data,
        });
    };
};
export const addTask = (data) => {
    return async dispatch => {
        try {
            let response = await POST('/api/task', data)
            //some check then dispatch
            dispatch({
                type: actions.ADD_TASK,
                payload: response,
            });
        } catch (error) {

        }
    };
};
export const updateTask = ({ id, title, description, assignTo, createdAt }) => {
    return async dispatch => {
        try {
            let response = await PUT(`/api/task/${id}`, { title, description, assignTo, createdAt })
            //some check then dispatch
            dispatch({
                type: actions.UPDATE_TASK,
                payload: response,
            });
        } catch (error) {

        }
    };
};
export const deleteTask = (id) => {
    return async dispatch => {
        try {
            let response = await DELETE(`/api/task/${id}`)
            //some check then dispatch
            dispatch({
                type: actions.DELETE_TASK,
                payload: response,
            });
        } catch (error) {

        }
    };
};