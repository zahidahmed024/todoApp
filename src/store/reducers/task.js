import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    tasks: []
};

const taskReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    console.log('task payload--->', payload)
    switch (type) {
        case actions.ADD_TASK: {
            draft.tasks.push(payload);
            return draft;
        }
        case actions.UPDATE_TASK: {
            let taskIndex = draft.tasks.findIndex(member => member.id === payload.id);
            draft.tasks[taskIndex] = payload;
            return draft
        }
        case actions.DELETE_TASK: {
            draft.tasks = draft.tasks.filter(task => task.id !== payload.id);
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

export default taskReducer;
