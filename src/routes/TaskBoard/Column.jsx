import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'

export default function Column(props) {
  return (
    <div className="column">
      <h3 className="column__header">
        <DeleteColumn className="button-delete" />
        {props.name}
      </h3>
      <div className="colunm-content">{props.children}</div>

      <CreateTask />
    </div>
  )
}
