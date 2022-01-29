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
) {
  console.log(id, taskTitle, taskDescription, columnId)

  axios
    .put(
      `${API_BASE_URL}/tasks`,
      {
        id: id,
        title: taskTitle,
        description: taskDescription,
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
                title: taskTitle,
                description: taskDescription,
                columnId: columnId,
              }
            : task,
        ),
      )
      setActive(false)
    })
    .catch((err) => {
      console.error(err)
    })
}
