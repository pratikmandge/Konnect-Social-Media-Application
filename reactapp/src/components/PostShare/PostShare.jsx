import {React, useState, useRef} from 'react'
// import ProfileImage from '../../img/profileImg.jpg'
import './PostShare.css'
import {UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes} from '@iconscout/react-unicons'
import { useDispatch, useSelector } from 'react-redux';
import { uploadPost } from '../../actions/uploadAction';
import defaultProfile from '../../img/defaultPicture.avif';

const PostShare = () => {
    
    const serverPublic  = process.env.REACT_APP_API_URL;
    const loading = useSelector((state)=>state.uploadReducer.uploading)


    const dispatchEvent = useDispatch();
    const user = useSelector((state) => state.authReducer.authData)
    
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const imageRef = useRef();

    const resetPostForm = () => {
        setImage(null);
        setTitle("");
        setContent("");
    }

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };
     
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("file", image);
        formData.append(
            "post",
            JSON.stringify({ user: { username: user.username }, title, content })
        );
        dispatchEvent(uploadPost(formData));
        resetPostForm();
    };

  return (
    <div className='PostShare'>
        <img src={user.profilePhotoPath ? serverPublic+"/api/users/"+user.username+"/profile-photo" : defaultProfile} alt="" />
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
            <input value={content} onChange={(e) => setContent(e.target.value)} required type="text" placeholder="What's happening?" />

            <div className="PostOptions">
                <div className="option" style={{color: "var(--photo)"}} onClick={()=>imageRef.current.click()}>
                    <UilScenery/>
                    Photo
                </div>

                <div className="option" style={{color: "var(--video)"}}>
                    <UilPlayCircle/>
                    Video
                </div>

                <div className="option" style={{color: "var(--location)"}}>
                    <UilLocationPoint/>
                    Location
                </div>

                <div className="option" style={{color: "var(--shedule)"}}>
                    <UilSchedule/>
                    Schedule
                </div>

                <button className='button ps-button' onClick={handleSubmit} disabled={loading} >
                    {loading ? "Uploading..." :"Share" }
                </button>

                <div style={{display: "none"}}>
                    <input type="file" accept="image/*" name="myImage" ref={imageRef} onChange={handleFileChange} />
                </div>

            </div>
            {image && (
                <div className="previewImage">
                    <UilTimes onClick={() => setImage(null)} />
                    <img src={URL.createObjectURL(image)} alt="" />
                </div>
            )}
        </div>
    </div>
  );
};

export default PostShare
