import { useContext } from 'react'
import { FaTrash } from 'react-icons/fa'

import taskContext from '../../contexts/taskContext'
import './styles.scss'

export default function Task() {
  const { tasks, setTasks } = useContext(taskContext)

  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        }
      }
      return task
    })
    setTasks(updatedTasks)
  }

  function handleDeleteTask(taskIdToDelete) {
    const updatedTasks = tasks.filter((task) => task.id !== taskIdToDelete)
    localStorage.setItem('tasks', JSON.stringify(updatedTasks))
    setTasks(updatedTasks)
  }

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <div>
              <input
                type="checkbox"
                checked={task.isChecked}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <p
                style={{
                  textDecoration: task.isChecked ? 'line-through' : 'none',
                }}
              >
                {task.description}
              </p>
            </div>
            <button onClick={() => handleDeleteTask(task.id)}>
              <FaTrash size={13} color="#7C7C8A" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
