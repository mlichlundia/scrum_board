import axios from 'axios'
import { API_BASE_URL } from '../../../constants/api.const'

export default function save(
  title,
  description,
  columnId,
  setTitle,
  setDescription,
  taskList,
  setTaskList,
  setActive,
) {
  axios
    .post(
      `${API_BASE_URL}/tasks`,
      {
        title: title,
        description: description,
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
      setTaskList([
        ...taskList,
        {
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          columnId: res.data.columnId,
        },
      ])
      console.log(taskList)
      setTitle('')
      setDescription('')
      setActive(false)
    })
    .catch((err) => {
      console.error(err)
      if (err.response.status === 400) {
        alert('Enter the info')
      } else {
        alert('You have to login to use this option')
      }
    })
}
