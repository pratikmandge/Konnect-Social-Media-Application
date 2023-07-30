// import * as UserApi from '../api/userRequest';

// export const getUser = (username) => async (dispatch) => {
//     dispatch({ type: 'USER_START' });
//     try {
//         const token = localStorage.getItem('token');
//         const config = {
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//             },
//         };
        
//         const {data} = await UserApi.getUser(username, config);
//         dispatch({ type: 'USER_SUCCESS', payload: data });
    
//     } catch (error) {
//         console.error("Error getting user:", error);
//         dispatch({ type: 'USER_FAIL' });
//     }
// };