import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextFiled from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
})

// eslint-disable-next-line no-unused-vars
export const EditTask = ({ title, body, id, onEdit }) => {
  const classes = useStyles()

  const [taskTitle, setTaskTitle] = useState(title)
  const [desc, setDesc] = useState(body)

  const changeTitleHandler = (e) => {
    setTaskTitle(e.target.value)
    e.preventDefault()
  }

  const changeDescHandler = (e) => {
    setDesc(e.target.value)
    e.preventDefault()
  }

  const editTask = () => {
    const task = {
      title: taskTitle,
      body: desc,
      _id: id
    }
    onEdit(task)
  }
  return (
    <form className={classes.root}>
      <TextFiled label="Task name" value={taskTitle} onChange={(e) => changeTitleHandler(e)} />
      <TextFiled label="Task description" value={desc} onChange={(e) => changeDescHandler(e)} />
      <Button variant="contained" color="primary" onClick={editTask}>
        Edit task
      </Button>
    </form>
  )
}

EditTask.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.string,
  onEdit: () => {}
}
