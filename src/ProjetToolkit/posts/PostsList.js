import {useSelector} from 'react-redux';
import {selectAllPosts} from './postsSlice';
import React from 'react'
import PostUser from './PostUser';

const PostsList = ()  => {
   // const posts = useSelector(state => state.posts)
    const posts = useSelector(selectAllPosts)
    
    const renderedUsers = posts.map(post => (
        <div key={post.id}> 
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p><PostUser userId={post.userId}/></p>
        </div>
    ))
    return (
        <div>
            <h2>Posts</h2>
            {renderedUsers}
        </div>
    )
}

export default PostsList
