import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../../../constants/api.const'

const BoardContext = createContext()

export function BoardProvider({ children }) {
  const [colData, setColData] = useState([])
  useEffect(() => {
    axios.get(`${API_BASE_URL}/board`).then((res) => {
      let columns = res.data.columns
      let tasks = res.data.tasks
      columns.forEach((column) => {
        column.tasks = tasks.filter((task) => task.columnId === column.id)
      })
      setColData(columns)
    })
  }, [])
  return (
    <BoardContext.Provider value={{ colData, setColData }}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardContext
