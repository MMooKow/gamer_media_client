import { useState, useEffect } from 'react';

const Comments = () => {

    const Comments = useEffect(() => {
        const getComments = async () => {
            const commentsFromServer = await fetchComments();
            console.log(commentsFromServer);
        }

        getComments();
    }, [])

    const fetchComments = async () => {
        const response = await fetch('https://localhost:44322/api/comments');
        const data = await response.json();

        return data;
    }

    const addComment = async (commentId) => {
        const result = await fetch(`https://localhost:44322/api/users/${commentId}`);
        const data = await result.json();

        return data;
    }


    const deleteComment = async (commentId) => {
        const result = await fetch(`https://localhost:44322/api/users/${commentId}`, {
            method: 'DELETE',
        });

    }
    return (
        <>

        </>
    )
};


export default Comments;