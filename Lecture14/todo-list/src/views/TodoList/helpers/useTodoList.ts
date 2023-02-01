import { useImmer } from "use-immer";

import { ITodoList } from "../../../types/Todo.types";
import { createTodo } from "./createTodo";

export const useTodoList = () => {
  const [todoList, updateTodoList] = useImmer<ITodoList>([]);

  const addTodo = (name: string) => {
    updateTodoList(draft => {
      draft.push(createTodo({name}));
    });
  };

  const removeTodo = (id: string) => {
    updateTodoList(draft => draft.filter((todo) => todo.id !== id));
  };

  const changeTodoStatus = (id: string, completed: boolean) => {
    updateTodoList(draft => {
      const todo = draft.find((todo) => todo.id === id);
      
      if (!todo) return;

      todo.completed = completed;
    });
  };

  return {
    todoList,
    addTodo,
    removeTodo,
    changeTodoStatus
  };
};
