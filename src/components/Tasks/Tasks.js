import React, {useState, useEffect} from 'react';
import { Container, Typography, List, makeStyles } from '@material-ui/core';

import Task from '../Task/Task';

const useStyles = makeStyles({
    container: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    }
});

const Tasks = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setTasks([
            {
                id: 1,
                title: 'bajo',
                body: 'jajo'
            },
            {
                id: 2,
                title: 'fuck',
                body: 'psy'
            },
        ]);
    }, []);

    const classes = useStyles();

    return (
        <Container className={classes.container} maxWidth="sm" fixed>
            <Typography variant="h2" component="h2">
                Tasks
            </Typography>
            <List>
                {tasks.map((task, index) => (
                    <Task id={task.id} title={task.title} body={task.body} key={index}/>
                ))}
            </List>
        </Container>
    );
}

export default Tasks;