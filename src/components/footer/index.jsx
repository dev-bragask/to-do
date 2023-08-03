import { useContext } from 'react'
import taskContext from '../../contexts/taskContext'
import './styles.scss'

export default function Footer() {
  function handleDeleteAllTasks() {
    localStorage.removeItem('tasks')
    setTasks([])
  }

  const { tasks, setTasks } = useContext(taskContext)
  return (
    <footer>
      <p>Você tem {tasks.length} pra fazer</p>
      <button onClick={handleDeleteAllTasks}>Limpar todas</button>
    </footer>
  )
}
