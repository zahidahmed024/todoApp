import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    users: [],
    loggedInUser: {},
};

const authReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    console.log('payload--->', payload)
    switch (type) {
        case actions.LOGIN: {
            draft.loggedInUser = payload;
            return draft
        }
        case actions.FETCH_TODO: {
            draft.categories.push(payload);
            return draft
        }

        default: {
            return draft;
        }
    }
});

export default authReducer;
