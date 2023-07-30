import * as AuthApi from '../api/AuthRequest'

export const logIn = (formData) => async(dispatch) => {
    
    dispatch({type: 'AUTH_START'})
    try{
        const {data} = await AuthApi.logIn(formData)
        dispatch({type: 'AUTH_SUCCESS', payload: data})
        
        const {data: userData} = await AuthApi.userDetails(data.token)
        dispatch({type: 'USER_DETAILS', payload: userData})
    }
    catch(error){
        console.log(error)
        dispatch({type: 'AUTH_FAIL'})   
    }
}

export const signUp = (formData) => async(dispatch) => {
    
    dispatch({type: 'AUTH_START'})
    try{
        const {data} = await AuthApi.signUp(formData)
        dispatch({type: 'AUTH_SUCCESS', payload: data})

        const {data: userData} = await AuthApi.userDetails(data.token)
        dispatch({type: 'USER_DETAILS', payload: userData})
    }
    catch(error){
        console.log(error)
        dispatch({type: 'AUTH_FAIL'})
    }
}

export const logOut = () => async(dispatch) => {
    dispatch({type: 'LOGOUT'})
}