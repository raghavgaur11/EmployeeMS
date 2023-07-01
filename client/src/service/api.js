import axios from 'axios';

const usersUrl = 'http://localhost:8000';


export const getUsers = async () => {
    try {
        return await axios.get(`${usersUrl}/`);
    } catch (error) {
        console.log('Error while calling getUsers Api ', error);
    }
}

export const addUser = async (user) => {
    try {
        return await axios.post(`${usersUrl}/add`, user);
    } catch (error) {
        console.log('Error while calling add User Api ', error);
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling get User Api ', error);
    }
}

export const editUser = async (user, id) => {
    try {
        return await axios.put(`${usersUrl}/${id}`, user);
    } catch (error) {
        console.log('Error while calling edit User Api ', error);
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${usersUrl}/${id}`);
    } catch (error) {
        console.log('Error while calling delete User Api ', error);
    }
}
