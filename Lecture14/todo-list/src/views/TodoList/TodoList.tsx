import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import { List, ListItem, ListItemText, Paper, styled, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';

import AddTodo from '../../components/AddTodo/AddTodo';
import { useTodoList } from './helpers/useTodoList';

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: theme.spacing(2)
}));

const TodoList = () => {
  const {todoList, addTodo, changeTodoStatus, removeTodo} = useTodoList();

  return (
    <StyledPaper elevation={3}>
      <Typography variant='h1' align='center'>Todo List</Typography>

      <AddTodo addTodo={addTodo} />

      <List sx={{ width: '100%' }} data-testid="todo-list">
        {todoList.map((todo) => (
          <ListItem
            key={todo.id}
            data-testid="todo-item"
            disableGutters
            secondaryAction={
              <Grid container spacing={1}>
                <Grid>
                  <IconButton onClick={() => removeTodo(todo.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton onClick={() => changeTodoStatus(todo.id, !todo.completed)}>
                    {todo.completed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
                  </IconButton>
                </Grid>
              </Grid>
            }
          >
            <ListItemText primary={todo.name} />
          </ListItem>
        ))}
    </List>
    </StyledPaper>

  );
};

export default TodoList;
