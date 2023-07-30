import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../post/Post'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction'

const Posts = () => {

  const dispatch = useDispatch()
  const {posts, loading} = useSelector((state) => state.postReducer)

  useEffect(() => {
    dispatch(getTimelinePosts())
  }, [dispatch])

  return (
    <div className='Posts'>
      { loading ? "Loading..." :
        posts.reverse().map((post) => {
        return <Post data={post} /> ;
      })}
    </div>
  )
}

export default Posts;
