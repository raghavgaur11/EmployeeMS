import { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography, TextField } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

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

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { firstname, lastname, doj, dob, salary, designation, department } = user;
    
    const navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        navigate('/');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">First Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='firstname' value={firstname} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='lastname' value={lastname} id="my-input" />
            </FormControl>
            <FormControl>
                <TextField variant='standard' type='date' label='Date of Joining' onChange={(e) => onValueChange(e)} name='doj' value={doj} InputLabelProps={{ shrink: true }} />
            </FormControl>
            <FormControl>
                <TextField variant='standard' type='date' label='Date of Birth' onChange={(e) => onValueChange(e)} name='dob' value={dob} InputLabelProps={{ shrink: true }} />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Salary</InputLabel>
                <Input type='number' onChange={(e) => onValueChange(e)} name='salary' value={salary} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Designation</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='designation' value={designation} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={department} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;