import* as types from '../actions/types';

const initialState = {
    access:localStorage.getItem('access'),
    refresh : localStorage.getItem('refresh'),
    isAuthenticated: null,
    user : null
};

export default function (state =initialState,action){
    const{ type, payload} = action;

    switch(type){

        case types.LOGIN_SUCESS:
            localStorage.setItem('access',payload.access);    
            return{
                ...state,
                isAuthenticated: true,
                access : payload.access,
                refresh : payload.refresh
            }
        
        case types.LOGIN_FAIL:
            localStorage.removeItem('access');  
            localStorage.removeItem('refresh');    
            return{
                ...state,
                isAuthenticated: false,
                user: null,
                access : null,
                refresh : null
            }
        case types.USER_LOADED_FAIL:
            return{
                ...state,
                user: null
            }
        case types.USER_LOADED_SUCCESS:
            return{
                ...state,
                user: payload
            }
        default:
            return state;
    }
}