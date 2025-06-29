import React from 'react';
import { render, screen } from '@testing-library/react';
import { TodoList } from '~/components/TodoList';
import type { Todo } from '~/types/todo';

describe('TodoList', () => {
  const mockTodos: Todo[] = [
    {
      id: 1,
      title: 'First Todo',
      completed: false,
      created_at: '2024-01-15T10:00:00Z'
    },
    {
      id: 2,
      title: 'Second Todo',
      completed: true,
      created_at: '2024-01-14T09:00:00Z'
    },
    {
      id: 3,
      title: 'Third Todo',
      completed: false,
      created_at: '2024-01-16T11:00:00Z'
    }
  ];

  it('renders todo list title', () => {
    render(<TodoList todos={mockTodos} />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
  });

  it('renders all todo items', () => {
    render(<TodoList todos={mockTodos} />);
    
    expect(screen.getByText('First Todo')).toBeInTheDocument();
    expect(screen.getByText('Second Todo')).toBeInTheDocument();
    expect(screen.getByText('Third Todo')).toBeInTheDocument();
  });

  it('displays correct todo statistics', () => {
    render(<TodoList todos={mockTodos} />);
    
    expect(screen.getByText(/Total: 3 todos/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 1/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 2/)).toBeInTheDocument();
  });

  it('shows empty state when no todos', () => {
    render(<TodoList todos={[]} />);
    
    expect(screen.getByText('No todos yet!')).toBeInTheDocument();
    expect(screen.getByText(/Total: 0 todos/)).toBeInTheDocument();
    expect(screen.getByText(/Completed: 0/)).toBeInTheDocument();
    expect(screen.getByText(/Remaining: 0/)).toBeInTheDocument();
  });

  it('renders correct number of checkboxes', () => {
    render(<TodoList todos={mockTodos} />);
    
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3);
  });
});