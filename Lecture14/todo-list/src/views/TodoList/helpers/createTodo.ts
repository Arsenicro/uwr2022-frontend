import { v4 } from 'uuid';

import { ITodo } from '../../../types/Todo.types';

interface IProps {
  name: string;
}

export const createTodo = ({name}: IProps): ITodo => ({
  id: v4(),
  name,
  completed: false
});
