import { produce } from 'immer';
import * as actions from '../actions/actionCreators';

const initialState = {
    task: []
};

const taskReducer = produce((draft = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ultapulta': {
            draft.expenses.push(payload);
            return draft;
        }

        default: {
            return draft;
        }
    }
});

export default taskReducer;
