import * as actions from './actionCreators';

export const getTodo = (data) => {
    return async dispatch => {
        dispatch({
            type: actions.FETCH_TODO,
            payload: data,
        });
    };
};