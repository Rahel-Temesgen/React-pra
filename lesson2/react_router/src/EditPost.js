import React from 'react'
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom/cjs/react-router-dom.min'

const EditPost = ({ 
    posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody
}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if (post) {
            setEditTitle(post.title);
            setEditBody(post.body);
        }
    }, [post, setEditBody, setEditTitle])

  return (
     <main className='NewPost'>
        {editBody &&
        <>
            <h2>Edit Post</h2>
            <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='postTitle'>Title:</label>
                <input
                    id='postTitle'
                    type='text'
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor='postBody'>Post</label>
                <textarea
                    id='postBody'
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                ></textarea> 
                <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
            </form>
        </>
        }
        {!editBody &&
        <>
            <h2>Post Not Found</h2>
            <p>Well, that's disppointing</p>
            <p>
                <Link to='/'>
                    Visit Our Homepage
                </Link>
            </p>
        </>
        }
    </main>
  )
}

export default EditPost
