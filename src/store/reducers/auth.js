import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    members: [],
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
        case actions.ADD_MEMBER: {
            draft.members.push(payload);
            return draft
        }

        default: {
            return draft;
        }
    }
});

export default authReducer;
