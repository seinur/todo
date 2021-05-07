import React from 'react';
import TodoTitle from './todo-title';
import SearchTodo from './todo-search';
import TodoList from './todo-list';

function App() {
    return (
      <div>
        <TodoTitle />
        <SearchTodo />
        <TodoList />
      </div>
    )
  }

export default App