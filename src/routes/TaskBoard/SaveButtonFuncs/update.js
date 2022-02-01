import axios from 'axios'
import { API_BASE_URL } from '../../../constants/api.const'

export default function edit(
  taskTitle,
  taskDescription,
  columnId,
  setTaskTitle,
  setTaskDescription,
  taskList,
  setTaskList,
  setActive,
  id,
  editTaskTitle,
  setEditTaskTitle,
  editDescription,
  setEditDescription,
) {
  console.log(id, editTaskTitle, editDescription, columnId)

  axios
    .put(
      `${API_BASE_URL}/tasks`,
      {
        id: id,
        title: editTaskTitle,
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
      setTaskList(
        taskList.map((task) =>
          task.id === id
            ? {
                id: id,
                title: editTaskTitle,
                description: editDescription,
                columnId: columnId,
              }
            : task,
        ),
      )
      setTaskTitle('')
      setEditTaskTitle('')
      setTaskDescription('')
      setEditDescription('')
      setActive(false)
    })
    .catch((err) => {
      console.error(err)
    })
}
