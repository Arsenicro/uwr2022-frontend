import { describe, expect, it } from 'vitest';

import { createTodo } from './createTodo';

describe("Create Todo", () => {
  /* it("Should create Todo with Name", () => {
    // Arrange
    const name = "New Todo";

    // Act
    const todo = createTodo({name: name});

    // Asset
    expect(todo.name).toEqual(name);
  });

  it("Should return unique id", () => {
    // Arrange
    const name1 = "New Todo";
    const name2 = "New Todo";

    // Act
    const todo1 = createTodo({name: name1});
    const todo2 = createTodo({name: name2});

    // Asset
    expect(todo1.id).not.toEqual(todo2.id);
  }); */

  it("Should create Todo with Name", () => {
    // Arrange
    const name = "New Todo";

    // Act
    const todo = createTodo({name: name});

    // Asset
    expect(todo.name).toMatchSnapshot();
  });
});
