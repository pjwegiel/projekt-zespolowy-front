import React, { useState, useEffect } from 'react'
import { Container, Typography, List, makeStyles, Button } from '@material-ui/core'
import Modal from 'react-modal'
import axios from '../../axios'

import Task from '../Task/Task'
import NewTask from '../NewTask/NewTask'
import { EditTask } from '../EditTask/EditTask'

const useStyles = makeStyles({
  container: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    height: '100vh'
  }
})

const Tasks = () => {
  const classes = useStyles()
  const [tasks, setTasks] = useState([])
  const [showEditModal, setShowEditModal] = useState(false)
  const [editedTask, setEditedTask] = useState({})

  useEffect(() => {
    fetchTasks()
  }, [tasks])

  const addTask = async (task) => {
    const tasksList = tasks
    const res = await axios.post('/tasks', task)
    const newNote = res.data
    tasksList.push(newNote)
    setTasks(tasksList)
  }

  const deleteTask = async (id) => {
    const tasksList = tasks.filter((task) => task._id !== id)
    setTasks(tasksList)
    await axios.delete('/tasks/' + id)
  }

  const editTask = async (task) => {
    const tasksList = tasks
    console.log(task)
    const index = tasksList.findIndex((item) => {
      console.log(item)
      item._id === task._id
    })
    if (index >= 0) {
      tasksList[index] = task
      setTasks(tasksList)
    }
    // await axios.put('/tasks/' + task._id, task)
    toggleModal()
  }

  const toggleModal = () => setShowEditModal(!showEditModal)

  const editTaskHandler = (task) => {
    toggleModal()
    setEditedTask(task)
  }

  const fetchTasks = async () => {
    const res = await axios.get('/tasks')
    const tasksList = res.data
    setTasks(tasksList)
  }

  return (
    <Container className={classes.container} maxWidth="sm" fixed>
      <Typography variant="h2" component="h2" align="right">
        Tasks
      </Typography>
      <NewTask onAdd={addTask} />
      <Modal isOpen={showEditModal} contentLabel="Edit task" ariaHideApp={false}>
        <EditTask
          onEdit={(task) => editTask(task)}
          title={editedTask.title}
          body={editedTask.body}
          id={editedTask._id}
        />
        <Button onClick={toggleModal}>Zamknij</Button>
      </Modal>
      <List>
        {tasks.map((task, index) => (
          <Task
            id={task._id}
            title={task.title}
            body={task.body}
            key={index}
            onDelete={() => deleteTask(task._id)}
            onEdit={(task) => editTaskHandler(task)}
          />
        ))}
      </List>
    </Container>
  )
}

export default Tasks
