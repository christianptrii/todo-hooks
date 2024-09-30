import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoView from './components/TodoView';

const App = () => {
  return (
    <TodoProvider>
      <TodoView />
    </TodoProvider>
  );
};

export default App;
