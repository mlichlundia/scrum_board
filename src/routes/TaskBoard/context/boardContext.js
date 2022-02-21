import { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../../../constants/api.const'
import produce from 'immer'
const BoardContext = createContext()

export function BoardProvider({ children }) {
  const [colData, setColData] = useState([])
  useEffect(() => {
    axios.get(`${API_BASE_URL}/board`).then((res) => {
      let columns = res.data.columns
      setColData(columns)
    })
  }, [])

  function dragEnd({ destination, source }, setError, setActiveErr) {
    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
    const taskCopy = {
      ...colData
        .find((col) => col.id === source.droppableId)
        .tasks.find((task, index) => index === source.index),
    }

    const sourceColumn = colData.find((col) => col.id === source.droppableId)
    const destinationColumn = colData.find(
      (col) => col.id === destination.droppableId,
    )
    const indexSourceColumn = colData.indexOf(sourceColumn)
    const indexDestinationColumn = colData.indexOf(destinationColumn)

    const state = produce(colData, (draft) => {
      draft[indexSourceColumn].tasks.splice(source.index, 1)
      draft[indexDestinationColumn].tasks.splice(destination.index, 0, taskCopy)
    })
    const ids = state[indexDestinationColumn].tasks.map((task) => task.id)

    if (destination.droppableId !== source.droppableId) {
      axios
        .put(
          `${API_BASE_URL}/tasks`,
          {
            id: taskCopy.id,
            title: taskCopy.title,
            description: taskCopy.description,
            columnId: destinationColumn.id,
          },
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
          },
        )
        .catch((err) => {
          console.error(err)
          setError(err.response.status)
          setActiveErr(true)
        })
    }

    axios
      .put(
        `${API_BASE_URL}/tasks/reorder`,
        {
          ids: ids,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(true)
      })
    setColData(state)
  }

  function saveCol(value, setValue, setActive, setError, setActiveErr) {
    axios
      .post(
        `${API_BASE_URL}/columns`,
        {
          title: value,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        const state = produce(colData, (draft) => {
          draft.push({ id: res.data.id, title: res.data.title, tasks: [] })
        })
        setColData(state)
        setValue('')
        setActive(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(true)
      })
  }

  function deleteColumn(id, setError, setActiveErr) {
    axios
      .delete(`${API_BASE_URL}/columns/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then(() => {
        setColData((cols) => cols.filter((col) => col.id !== id))
      })
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(true)
      })
  }

  function saveTask(funcData, setError, setActiveErr) {
    axios
      .post(
        `${API_BASE_URL}/tasks`,
        {
          title: funcData.title,
          description: funcData.description,
          columnId: funcData.columnId,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then((res) => {
        const state = produce(funcData.colData, (draft) => {
          draft[funcData.columnIndex].tasks.push({
            id: res.data.id,
            title: res.data.title,
            description: res.data.description,
            columnId: res.data.columnId,
          })
        })
        funcData.setColData(state)
        funcData.setTitle('')
        funcData.setDescription('')
        funcData.setActive(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(true)
      })
  }

  function editTask(funcData, setError, setActiveErr) {
    const taskIndex = funcData.colData[funcData.columnIndex].tasks.indexOf(
      funcData.task,
    )
    axios
      .put(
        `${API_BASE_URL}/tasks`,
        {
          id: funcData.task.id,
          title: funcData.editTitle,
          description: funcData.editDescription,
          columnId: funcData.columnId,
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`,
          },
        },
      )
      .then(() => {
        const state = produce(funcData.colData, (draft) => {
          draft[funcData.columnIndex].tasks[taskIndex] = {
            id: funcData.task.id,
            title: funcData.editTitle,
            description: funcData.editDescription,
            columnId: funcData.columnId,
          }
        })
        funcData.setColData(state)
        funcData.setTitle('')
        funcData.setEditTitle('')
        funcData.setDescription('')
        funcData.setEditDescription('')
        funcData.setActive(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(true)
      })
  }

  function deleteTask(task, columnIndex, taskIndex, setError, setActiveErr) {
    axios
      .delete(`${API_BASE_URL}/tasks/${task.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      })
      .then(() => {
        const state = produce(colData, (draft) => {
          draft[columnIndex].tasks.splice(taskIndex, 1)
        })

        setColData(state)
      })
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(true)
      })
  }
  return (
    <BoardContext.Provider
      value={{
        colData,
        setColData,
        saveCol,
        deleteColumn,
        saveTask,
        editTask,
        dragEnd,
        deleteTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export default BoardContext
