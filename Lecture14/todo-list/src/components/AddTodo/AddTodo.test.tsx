import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import AddTodo from './AddTodo';

describe("Add Todo Component", () => {
  it("Can Add Todo", () => {
    const fn = vi.fn();

    render(<AddTodo addTodo={fn} />);
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    fireEvent.change(input, {target: {value: 'New Todo'}});
    fireEvent.click(button);

    expect(fn).toBeCalledWith("New Todo");
  });
});
