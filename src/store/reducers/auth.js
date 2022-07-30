import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    members: [],
    loggedInUser: {},
};

const authReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    // console.log('payload--->', payload)
    switch (type) {
        case actions.LOGIN: {
            draft.loggedInUser = payload;
            return draft
        }
        case actions.ADD_MEMBER: {
            draft.members.push(payload);
            return draft
        }
        case actions.UPDATE_MEMBER: {
            let memberIndex = draft.members.findIndex(member => member.id === payload.id);
            draft.members[memberIndex] = payload;
            return draft
        }
        case actions.DELETE_MEMBER: {
            draft.members = draft.members.filter(member => member.id !== payload.id);
            return draft
        }
        case actions.LOGOUT: {
            return initialState
        }

        default: {
            return draft;
        }
    }
});

export default authReducer;
