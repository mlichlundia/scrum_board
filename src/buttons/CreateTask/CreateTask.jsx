import './CreateTask.css'

export default function CreateTask({ setActive }) {
  return (
    <button
      className="button-create-task"
      onClick={() => {
        setActive(true)
      }}
    >
      <p1>Create Task</p1>
      <svg
        className="button-create-task__icon"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_82_76)">
          <path
            d="M8.25006 1.73535C8.25006 1.32114 7.91427 0.985352 7.50006 0.985352C7.08584 0.985352 6.75006 1.32114 6.75006 1.73535H8.25006ZM6.75006 13.2648C6.75006 13.679 7.08584 14.0148 7.50006 14.0148C7.91427 14.0148 8.25006 13.679 8.25006 13.2648H6.75006ZM13.2648 8.25006C13.679 8.25006 14.0148 7.91427 14.0148 7.50006C14.0148 7.08584 13.679 6.75006 13.2648 6.75006V8.25006ZM1.73535 6.75006C1.32114 6.75006 0.985352 7.08584 0.985352 7.50006C0.985352 7.91427 1.32114 8.25006 1.73535 8.25006L1.73535 6.75006ZM6.75006 1.73535V13.2648H8.25006V1.73535H6.75006ZM13.2648 6.75006L1.73535 6.75006L1.73535 8.25006L13.2648 8.25006V6.75006Z"
            fill="#7083A0"
          />
        </g>
        <defs>
          <clipPath id="clip0_82_76">
            <rect
              width="14"
              height="14"
              fill="white"
              transform="translate(0.5 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}
