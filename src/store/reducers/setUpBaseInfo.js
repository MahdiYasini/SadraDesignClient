import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    language: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_LANGUAGE:
            return updateObject(state, {language: action.language})
        default:
            return state;
    }
};

export default reducer;