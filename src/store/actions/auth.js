import * as actions from './actionCreators';
import { DELETE, POST, PUT } from '../../utils/ApiCaller';

export const login = (data) => {
    return async dispatch => {
        try {
            let response = await POST('/api/user', data)
            // console.log('response--->', response)
            dispatch({
                type: actions.LOGIN,
                payload: response,
            });
        } catch (error) {
            console.log('error--->', error)
        }
    };
};

export const addMember = (data) => {
    return async dispatch => {
        try {
            let response = await POST('/api/member', data)
            // console.log('response--->', response)
            dispatch({
                type: actions.ADD_MEMBER,
                payload: response,
            });
        } catch (error) {
            console.log('error--->', error)
        }
    };
};
export const updateMember = ({ userId, name, email }) => {
    return async dispatch => {
        try {
            let response = await PUT(`/api/member/${userId}`, { name, email })
            console.log('updateMember response--->', response)
            dispatch({
                type: actions.UPDATE_MEMBER,
                payload: response,
            });
        } catch (error) {
            console.log('error--->', error)
        }
    };
};
export const deleteMember = (data) => {
    return async dispatch => {
        try {
            let response = await DELETE(`/api/member/${data}`)
            console.log('delete response--->', response)
            dispatch({
                type: actions.DELETE_MEMBER,
                payload: response,
            });
        } catch (error) {
            console.log('error--->', error)
        }
    };
};
export const logOut = (data) => {
    return dispatch => {
        dispatch({
            type: actions.LOGOUT,
            payload: '',
        });
    }
};