import * as PostApi from '../api/PostRequest';

export const getTimelinePosts = () => async (dispatch) => {
  dispatch({ type: 'RETREIVING_START' });
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    const { data } = await PostApi.getTimelinePosts(config);
    dispatch({ type: 'RETREIVING_SUCCESS', data: data });
  } catch (error) {
    dispatch({ type: 'RETREIVING_FAIL' });
    console.log(error);
  }
};
