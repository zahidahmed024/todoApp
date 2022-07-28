import * as actions from './actionCreators';
import { POST } from '../../utils/ApiCaller';

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