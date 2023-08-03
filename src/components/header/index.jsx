import { useContext, useState } from 'react'
import { MdOutlineAdd } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid'

import taskContext from '../../contexts/taskContext'
import './styles.scss'

export default function Input() {
  const [inputValue, setInputValue] = useState('')
  const [showLabel, setShowLabel] = useState(false)
  const { tasks, setTasks } = useContext(taskContext)

  function handleCreateTask() {
    if (inputValue === '') {
      setShowLabel(true)
    } else {
      setTasks([{ id: uuidv4(), description: inputValue }, ...tasks])
      localStorage.setItem(
        'tasks',
        JSON.stringify([{ id: uuidv4(), description: inputValue }, ...tasks]),
      )
      setInputValue('')
      setShowLabel(false)
    }
  }

  return (
    <div className="headerContainer">
      <h1>Suas tarefas</h1>
      <div className="headerInputContainer">
        <div>
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="input-text"
            type="text"
            placeholder="Adicione suas tarefas"
          />
          {showLabel && <label>Você não digitou nada</label>}
        </div>
        <button onClick={handleCreateTask}>
          {' '}
          <MdOutlineAdd size={20} color="#FFFF" />{' '}
        </button>
      </div>
    </div>
  )
}
