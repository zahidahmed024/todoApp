import { POST } from '../../utils/ApiCaller';
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
    console.log('data--->', data)
    return async dispatch => {
        try {
            let response = await POST('/api/task', data)
            console.log('response--->', response)
            dispatch({
                type: actions.ADD_TASK,
                payload: response,
            });
        } catch (error) {

        }
    };
};