import './Column.css'
import CreateTask from '../../buttons/CreateTask/CreateTask.jsx'
import DeleteColumn from '../../buttons/DeleteColumn/DeleteColumn.jsx'

export default function Column({
  title,
  id,
  children,
  setActive,
  setColData,
  colData,
}) {
  return (
    <div className="column">
      <h3 className="column__header">
        <DeleteColumn
          className="button-delete"
          title={title}
          id={id}
          setColData={setColData}
          colData={colData}
        />
        {title}
      </h3>
      <div className="colunm-content">{children}</div>

      <CreateTask setActive={setActive} />
    </div>
  )
}
