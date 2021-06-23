import React from 'react';
import { ListItem, ListItemText, Button } from '@material-ui/core';

const Task = ({id, title, body}) => (
    <ListItem key={id}>
        <ListItemText primary={title} secondary={body} />
        <Button variant="contained" color="primary">Edit</Button>
        <Button variant="contained" color="secondary">Delete</Button>
    </ListItem>
);

export default Task;