import { apiRoutes } from '../../constants';
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
            let response = await POST(apiRoutes.task, data)
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
            let response = await PUT(`${apiRoutes.task}/${id}`, { title, description, assignTo, createdAt })
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
            let response = await DELETE(`${apiRoutes.task}/${id}`)
            //some check then dispatch
            dispatch({
                type: actions.DELETE_TASK,
                payload: response,
            });
        } catch (error) {

        }
    };
};