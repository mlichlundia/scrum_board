import { useContext } from 'react'
import BoardContext from '../../routes/TaskBoard/context/boardContext'
import './DeleteColumn.css'
import Svg from '../../svgs/Svg'
import ErrorNotificationContext from '../../context/ErrorNotificationContext'

export default function DeleteColumn({ id }) {
  const { deleteColumn } = useContext(BoardContext)
  const { setActiveErr, setError } = useContext(ErrorNotificationContext)
  return (
    <button
      className="button-delete-column"
      onClick={() => {
        deleteColumn(id, setError, setActiveErr)
      }}
    >
      <Svg name="delete-column" />
    </button>
  )
}
