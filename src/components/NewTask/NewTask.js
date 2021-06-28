import React, { useState } from 'react'
import TextFiled from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
// import PropTypes from 'prop-types'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const NewTask = ({ onAdd }) => {
  const classes = useStyles()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const changeTitleHandler = (e) => {
    setTitle(e.target.value)
    e.preventDefault()
  }

  const changeDescHandler = (e) => {
    setDesc(e.target.value)
    e.preventDefault()
  }

  const addTask = () => {
    const task = {
      title: title,
      body: desc
    }
    onAdd(task)
    setTitle('')
    setDesc('')
  }

  return (
    <form className={classes.root}>
      <TextFiled label="Task name" value={title} onChange={(e) => changeTitleHandler(e)} />
      <TextFiled label="Task description" value={desc} onChange={(e) => changeDescHandler(e)} />
      <Button variant="contained" color="primary" onClick={addTask}>
        Add task
      </Button>
    </form>
  )
}

export default NewTask

NewTask.propTypes = {
  onAdd: () => {}
}
