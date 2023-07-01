import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, TextField } from '@mui/material';
import { editUser, getUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const initialValue = {
    firstname: '',
    lastname: '',
    doj: null,
    dob: null,
    salary: null,
    designation: '',
    department: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top: 20px;
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const editUserDetails = async() => {
        await editUser(user, id);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Edit User</Typography>
            <FormControl>
                <InputLabel>First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstname' value={user.firstname} />
            </FormControl>
            <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={user.lastname} />
            </FormControl>
            <FormControl>
                <TextField variant='standard' type='date' label='Date of Joining' onChange={(e) => onValueChange(e)} name='doj' value={user.doj} InputLabelProps={{ shrink: true }} />
            </FormControl>
            <FormControl>
                <TextField variant='standard' type='date' label='Date of Birth' onChange={(e) => onValueChange(e)} name='dob' value={user.dob} InputLabelProps={{ shrink: true }} />
            </FormControl>
            <FormControl>
                <InputLabel>Salary</InputLabel>
                <Input type='number' onChange={(e) => onValueChange(e)} name='salary' value={user.salary} />
            </FormControl>
            <FormControl>
                <InputLabel>Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='designation' value={user.designation} />
            </FormControl>
            <FormControl>
                <InputLabel>Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={user.department} />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;