const uploadReducer = (state={uploadData: [], loading: false, error: false, uploading : false}, action) => {
    switch(action.type){
        case 'POST_START':
            return {...state, uploading: true, error: false}
        case 'POST_SUCCESS':
            return {...state, uploadData: [action.payload], uploading: false, error: false}
        case 'POST_FAIL':
            return {...state, uploading: false, error: true}
        default:
            return state
    }
}

export default uploadReducer;