const postReducer = (state = { posts: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case 'RETREIVING_START':
      return { ...state, loading: true, error: null };
    case 'RETREIVING_SUCCESS':
      return { ...state, posts: action.data, loading: false, error: null };
    case 'RETREIVING_FAIL':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default postReducer;
  