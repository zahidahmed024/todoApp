import * as actions from './actionCreators';
import { DELETE, POST, PUT } from '../../utils/ApiCaller';
import { apiRoutes } from '../../constants';

export const login = (data) => {
    return async dispatch => {
        try {
            let response = await POST(apiRoutes.user, data)
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
            let response = await POST(apiRoutes.member, data)
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
            let response = await PUT(`${apiRoutes.member}/${userId}`, { name, email })
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
            let response = await DELETE(`${apiRoutes.member}/${data}`)
            dispatch({
                type: actions.DELETE_MEMBER,
                payload: response,
            });
        } catch (error) {
            console.log('error--->', error)
        }
    };
};