import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    tasks: []
};

const taskReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case actions.ADD_TASK: {
            draft.tasks.push(payload);
            return draft;
        }

        default: {
            return draft;
        }
    }
});

export default taskReducer;
