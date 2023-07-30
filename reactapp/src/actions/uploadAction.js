import * as UploadApi from '../api/UploadRequest';

export const uploadPost = (formData) => async (dispatch) => {
  dispatch({ type: 'POST_START' });
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    };
    
    const {data} = await UploadApi.uploadPost(formData, config);
    dispatch({ type: 'POST_SUCCESS', payload: data });

  } catch (error) {
    console.error("Error uploading post:", error);
    dispatch({ type: 'POST_FAIL' });
  }
};
