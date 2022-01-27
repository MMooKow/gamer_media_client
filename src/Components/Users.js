import { useState, useEffect } from 'react';

const Users = () => {

    const users = useEffect(() => {
        const getUsers = async () => {
            const usersFromServer = await fetchUsers();
            console.log(usersFromServer);
        }

        getUsers();
    }, [])

    const fetchUsers = async () => {
        const response = await fetch('https://localhost:44322/api/users');
        const data = await response.json();

        return data;
    }

    const addUser = async (userId) => {
        const result = await fetch(`https://localhost:44322/api/users/${userId}`);
        const data = await result.json();

        return data;
    }


    const deleteUser = async (userId) => {
        const result = await fetch(`https://localhost:44322/api/users/${userId}`, {
            method: 'DELETE',
        });

    }
    return (
        <>

        </>
    )
};


export default Users;
