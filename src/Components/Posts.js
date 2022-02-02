import { useState, useEffect } from 'react';

const Posts = () => {

    const Posts = useEffect(() => {
        const getPosts = async () => {
            const postFromServer = await fetchPosts();
            console.log(postsFromServer);
        }

        getPosts();
    }, [])

    const fetchPosts = async () => {
        const response = await fetch('https://localhost:44322/api/posts');
        const data = await response.json();

        return data;
    }

    const addPost = async (postId) => {
        const result = await fetch(`https://localhost:44322/api/users/${postId}`);
        const data = await result.json();

        return data;
    }


    const deletePost = async (postId) => {
        const result = await fetch(`https://localhost:44322/api/users/${postId}`, {
            method: 'DELETE',
        });

    }
    return (
        <>

        </>
    )
};


export default Posts;