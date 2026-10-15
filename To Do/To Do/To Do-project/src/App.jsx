import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Initial state matches the whiteboard demo: 1 task that is completed
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('taskmate_todos')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch {
        // fallback
      }
    }
    return [
      {
        id: 1,
        text: 'Review React frontend fundamentals',
        completed: true,
      },
    ]
  })

  const [task, setTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  // Persist to local storage
  useEffect(() => {
    localStorage.setItem('taskmate_todos', JSON.stringify(todos))
  }, [todos])

  const totalTasks = todos.length
  const completedTasks = todos.filter((t) => t.completed).length
  const remainingTasks = totalTasks - completedTasks

  function handleAddTask(e) {
    e.preventDefault()
    if (!task.trim()) return

    const newTodo = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
    }

    setTodos([newTodo, ...todos])
    setTask('')
  }

  function toggleTask(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setEditText('')
    }
  }

  function startEditing(todo) {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  function saveEdit(id) {
    if (!editText.trim()) return

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    )
    setEditingId(null)
    setEditText('')
  }

  function cancelEdit() {
    setEditingId(null)
    setEditText('')
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'pending') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <div className="app-container">
      {/* Decorative light green background blobs */}
      <div className="bg-decor-circle circle-1"></div>
      <div className="bg-decor-circle circle-2"></div>

      <div className="content-wrapper">
        {/* Header Section */}
        <header className="header-section">
          <div className="workspace-badge">
            <span className="badge-dot"></span>
            YOUR PERSONAL WORKSPACE
          </div>
          <h1 className="header-title">Make today count.</h1>
          <p className="header-subtitle">
            Small steps every day lead to big results.
          </p>
        </header>

        {/* 3 Summary Stat Cards */}
        <div className="stats-row">
          {/* Total Tasks Card */}
          <div className="stat-card">
            <div className="stat-icon-wrapper total-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <path d="M9 12h6"></path>
                <path d="M9 16h6"></path>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Tasks</span>
              <span className="stat-value">{totalTasks}</span>
            </div>
          </div>

          {/* Remaining Tasks Card */}
          <div className="stat-card">
            <div className="stat-icon-wrapper remaining-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Remaining</span>
              <span className="stat-value">{remainingTasks}</span>
            </div>
          </div>

          {/* Completed Tasks Card */}
          <div className="stat-card">
            <div className="stat-icon-wrapper completed-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Completed</span>
              <span className="stat-value">{completedTasks}</span>
            </div>
          </div>
        </div>

        {/* Main Tasks Card */}
        <main className="tasks-card">
          {/* Card Header & Filter Tabs */}
          <div className="tasks-card-header">
            <div>
              <h2 className="tasks-title">My Tasks</h2>
              <p className="tasks-subtitle">Keep track of what matters today</p>
            </div>

            <div className="filter-pills">
              <button
                type="button"
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All <span className="filter-count">{totalTasks}</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
                onClick={() => setFilter('pending')}
              >
                Pending <span className="filter-count">{remainingTasks}</span>
              </button>
              <button
                type="button"
                className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
                onClick={() => setFilter('completed')}
              >
                Completed <span className="filter-count">{completedTasks}</span>
              </button>
            </div>
          </div>

          {/* Add Task Input Row */}
          <form className="add-task-form" onSubmit={handleAddTask}>
            <div className="input-field-wrapper">
              <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <input
                type="text"
                className="task-input"
                placeholder="What do you need to do?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <button type="submit" className="add-task-btn" disabled={!task.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Task</span>
            </button>
          </form>

          {/* Task List */}
          <div className="task-list-section">
            {filteredTodos.length === 0 ? (
              <div className="empty-state">
                <div className="empty-state-icon">🌱</div>
                <h3 className="empty-state-title">
                  {filter === 'all'
                    ? 'No tasks yet!'
                    : filter === 'pending'
                    ? 'No pending tasks!'
                    : 'No completed tasks yet!'}
                </h3>
                <p className="empty-state-text">
                  {filter === 'all'
                    ? 'Type something above and click "Add Task" to get started.'
                    : filter === 'pending'
                    ? 'You have completed everything! Great job.'
                    : 'Check off a task to see it here.'}
                </p>
              </div>
            ) : (
              <ul className="todo-items-list">
                {filteredTodos.map((todo) => {
                  const isEditing = editingId === todo.id

                  return (
                    <li
                      key={todo.id}
                      className={`todo-item ${todo.completed ? 'completed' : ''}`}
                    >
                      <button
                        type="button"
                        className={`custom-checkbox ${todo.completed ? 'checked' : ''}`}
                        onClick={() => toggleTask(todo.id)}
                        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                      >
                        {todo.completed && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        )}
                      </button>

                      {isEditing ? (
                        <div className="edit-container">
                          <input
                            type="text"
                            className="edit-input"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') saveEdit(todo.id)
                              if (e.key === 'Escape') cancelEdit()
                            }}
                            autoFocus
                          />
                          <div className="edit-actions">
                            <button
                              type="button"
                              className="save-btn"
                              onClick={() => saveEdit(todo.id)}
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              className="cancel-btn"
                              onClick={cancelEdit}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <span
                          className="todo-text"
                          onClick={() => toggleTask(todo.id)}
                        >
                          {todo.text}
                        </span>
                      )}

                      {!isEditing && (
                        <div className="action-buttons">
                          <button
                            type="button"
                            className="action-btn edit-action"
                            title="Edit task"
                            onClick={() => startEditing(todo)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 20h9"></path>
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="action-btn delete-action"
                            title="Delete task"
                            onClick={() => deleteTask(todo.id)}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </button>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Footer note inside card */}
          <footer className="card-footer">
            <span>Keep going! Every small step counts 🌿</span>
          </footer>
        </main>
      </div>
    </div>
  )
}

export default App
