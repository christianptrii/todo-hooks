import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import '../styles.css'; // Import CSS

const TodoView = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: todoText });
    setTodoText('');
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <label className="input-label">Tugas Baru:</label>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Tambahkan tugas baru..."
        className="input-field"
      />
      <button onClick={handleAddTodo} className="add-button">
        Tambah Tugas
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
              className="remove-button"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoView;
