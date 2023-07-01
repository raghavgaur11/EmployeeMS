import { useEffect, useState } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, styled, Button } from '@mui/material'

import { getUsers, deleteUser } from '../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TBody = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const Dashboard = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date of Joining</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Designation</TableCell>
                    <TableCell>Department</TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {users.map(user => {
                    return (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.firstname}</TableCell>
                            <TableCell>{user.doj}</TableCell>
                            <TableCell>{user.dob}</TableCell>
                            <TableCell>{user.salary}</TableCell>
                            <TableCell>{user.designation}</TableCell>
                            <TableCell>{user.department}</TableCell>
                            <TableCell>
                                <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
                                <Button color="secondary" variant="contained" onClick={() => deleteUserDetails(user._id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    );
                })}
            </TableBody>
        </StyledTable>
    )
}

export default Dashboard;