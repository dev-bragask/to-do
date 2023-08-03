import { useState } from 'react'

import Tasks from './components/tasks'
import Header from './components/header'
import Footer from './components/footer'

import TaskContext from './contexts/taskContext'

export default function App() {
  function handleGetSavedTasksFromLocalStorage() {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  }

  const savedTasks = handleGetSavedTasksFromLocalStorage()
  const [tasks, setTasks] = useState(savedTasks)

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div className="todoContainer">
        <Header />
        <Tasks />
        <Footer />
      </div>
    </TaskContext.Provider>
  )
}
