import axios from 'axios'
import { API_BASE_URL } from '../../../constants/api.const'
import produce from 'immer'

export default function save(
  title,
  setTitle,
  description,
  setDescription,
  columnId,
  colData,
  setColData,
  columnIndex,
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
      const state = produce(colData, (draft) => {
        draft[columnIndex].tasks.push({
          id: res.data.id,
          title: res.data.title,
          description: res.data.description,
          columnId: res.data.columnId,
        })
      })

      setColData(state)
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
