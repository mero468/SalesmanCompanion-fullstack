import* as types from './types';
import axios from 'axios'

export const Signin = (email,password) => async dispatch =>{

    const config ={
        headers :{
            'Content-Type' : 'application/json'
        }
    };

    const body = JSON.stringify({email,password});

    try{
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`,body,config)
        dispatch({
            type : types.LOGIN_SUCESS,
            payload: res.data 
        });
    } catch(err){
        dispatch({
            type : types.LOGIN_FAIL
        });
    }
};


export const load_user = () => async dispatch =>{
    if (localStorage.getItem('access')){
        const config ={
            headers :{
                'Content-Type' : 'application/json',
                'Authorization' : `JWT ${localStorage.getItem('accesss')}`,
                'Accept' : 'application/json'
            }
        };
        
        try{
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`,config)
            
            dispatch({
                type : types.USER_LOADED_SUCCESS,
                payload: res.data 
            });

            dispatch(load_user());
        } catch(err){
            dispatch({
                type : types.USER_LOADED_FAIL 
            });
        }
        };


};