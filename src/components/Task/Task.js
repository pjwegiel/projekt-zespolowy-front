import React from 'react'
import { ListItem, ListItemText, Button } from '@material-ui/core'
import PropTypes from 'prop-types'

const Task = ({ id, title, body, onDelete, onEdit }) => {
  const editHandler = () => {
    onEdit({
      title,
      body,
      _id: id
    })
  }

  const deleteHandler = (id) => {
    onDelete(id)
  }

  return (
    <ListItem key={id}>
      <ListItemText primary={title} secondary={body} />
      <Button variant="contained" color="primary" onClick={editHandler}>
        Edit
      </Button>
      <Button variant="contained" color="secondary" onClick={deleteHandler}>
        Delete
      </Button>
    </ListItem>
  )
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  onDelete: () => {},
  onEdit: () => {}
}

export default Task
