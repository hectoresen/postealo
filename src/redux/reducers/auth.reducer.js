import * as actions from '../actions/auth.actions';

const INITIAL_STATE = {
    user: null,
    error: false
};

export const authReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case(actions.AUTH_REGISTER_OK): {
            return {...state, user: action.payload, error: false}
        }
        case(actions.AUTH_REGISTER_ERROR): {
            return {...state, user: false, error: action.payload}
        }
        default:
            return state;
    }
}