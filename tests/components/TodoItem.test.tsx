import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoItem } from '~/components/TodoItem';
import type { Todo } from '~/types/todo';

describe('TodoItem', () => {
  const mockTodo: Todo = {
    id: 1,
    title: 'Test Todo',
    completed: false,
    created_at: '2024-01-15T10:00:00Z'
  };

  const completedTodo: Todo = {
    id: 2,
    title: 'Completed Todo',
    completed: true,
    created_at: '2024-01-14T09:00:00Z'
  };

  it('renders todo item with title and date', () => {
    render(<TodoItem todo={mockTodo} />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('1/15/2024')).toBeInTheDocument();
  });

  it('renders unchecked checkbox for incomplete todo', () => {
    render(<TodoItem todo={mockTodo} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('renders checked checkbox for completed todo', () => {
    render(<TodoItem todo={completedTodo} />);
    
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('applies strikethrough style to completed todo', () => {
    render(<TodoItem todo={completedTodo} />);
    
    const todoText = screen.getByText('Completed Todo');
    expect(todoText).toHaveClass('line-through');
  });

  it('does not apply strikethrough style to incomplete todo', () => {
    render(<TodoItem todo={mockTodo} />);
    
    const todoText = screen.getByText('Test Todo');
    expect(todoText).not.toHaveClass('line-through');
  });
});