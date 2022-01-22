import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'

export default function Column({ name, children, setActive }) {
  // console.log(setActive)
  return (
    <div className="column">
      <h3 className="column__header">
        <DeleteColumn className="button-delete" />
        {name}
      </h3>
      <div className="colunm-content">{children}</div>

      <CreateTask setActive={setActive} />
    </div>
  )
}
