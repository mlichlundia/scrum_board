import axios from 'axios'
import { API_BASE_URL } from '../../../constants/api.const'
import produce from 'immer'

export default function edit(
  title,
  setTitle,
  description,
  setDescription,
  columnId,
  colData,
  setColData,
  columnIndex,
  setActive,
  task,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
) {
  console.log(columnIndex)
  const taskIndex = colData[columnIndex].tasks.indexOf(task)
  console.log(taskIndex)

  axios
    .put(
      `${API_BASE_URL}/tasks`,
      {
        id: task.id,
        title: editTitle,
        description: editDescription,
        columnId: columnId,
      },

      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      },
    )
    .then((res) => {
      console.log(res)

      const state = produce(colData, (draft) => {
        draft[columnIndex].tasks[taskIndex] = {
          id: task.id,
          title: editTitle,
          description: editDescription,
          columnId: columnId,
        }
      })

      setColData(state)
      setTitle('')
      setEditTitle('')
      setDescription('')
      setEditDescription('')
      setActive(false)
    })
    .catch((err) => {
      console.error(err)
    })
}
