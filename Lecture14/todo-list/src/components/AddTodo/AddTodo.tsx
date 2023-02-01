import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/system/Unstable_Grid';
import React, { useState } from 'react';

interface IProps {
  addTodo: (name: string) => void;
}

const AddTodo = ({addTodo}: IProps) => {
  const [input, setInput] = useState('');

  const onAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={onAdd} data-testid="add-form">
      <Grid container spacing={1}>
        <Grid xs>
          <TextField label="New Todo" id="newTodo" value={input} onChange={(e) => setInput(e.target.value)} fullWidth />
        </Grid>
        <Grid xs={1} textAlign="center">
        <IconButton type='submit'>
          <AddCircleRoundedIcon fontSize='large' />
        </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
