import './TaskOption.css'

export default function TaskOption({ classStyle, setOptionsActive }) {
  return (
    <>
      <button className={classStyle} onClick={() => setOptionsActive(true)}>
        <svg
          className="option__icon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.875 3.4375C11.8621 2.8125 11.6504 2.295 11.24 1.885C10.8296 1.475 10.3121 1.26333 9.6875 1.25C9.0625 1.26292 8.545 1.47458 8.135 1.885C7.725 2.29542 7.51333 2.81292 7.5 3.4375C7.51292 4.0625 7.72458 4.58 8.135 4.99C8.54542 5.4 9.06292 5.61167 9.6875 5.625C10.3125 5.61208 10.83 5.40042 11.24 4.99C11.65 4.57958 11.8617 4.06208 11.875 3.4375ZM10.625 3.4375C10.6121 3.69792 10.5177 3.91604 10.3419 4.09188C10.166 4.26771 9.94792 4.35562 9.6875 4.35562C9.42708 4.35562 9.20896 4.26771 9.03312 4.09187C8.85729 3.91604 8.76937 3.69792 8.76937 3.4375C8.76938 3.17708 8.85729 2.95896 9.03312 2.78312C9.20896 2.60729 9.42708 2.51937 9.6875 2.51937C9.94792 2.51937 10.166 2.60729 10.3419 2.78312C10.5177 2.95896 10.6121 3.17708 10.625 3.4375ZM11.875 10C11.8621 10.625 11.6504 11.1425 11.24 11.5525C10.8296 11.9625 10.3121 12.1742 9.6875 12.1875C9.0625 12.1746 8.545 11.9629 8.135 11.5525C7.725 11.1421 7.51333 10.6246 7.5 10C7.51292 9.375 7.72458 8.8575 8.135 8.4475C8.54542 8.0375 9.06292 7.82583 9.6875 7.8125C10.3125 7.82542 10.83 8.03708 11.24 8.4475C11.65 8.85792 11.8617 9.37542 11.875 10ZM10.625 10C10.6121 9.73958 10.5177 9.52146 10.3419 9.34562C10.166 9.16979 9.94792 9.08187 9.6875 9.08187C9.42708 9.08187 9.20896 9.16979 9.03312 9.34562C8.85729 9.52146 8.76937 9.73958 8.76937 10C8.76937 10.2604 8.85729 10.4785 9.03312 10.6544C9.20896 10.8302 9.42708 10.9181 9.6875 10.9181C9.94792 10.9181 10.166 10.8302 10.3419 10.6544C10.5177 10.4785 10.6121 10.2604 10.625 10ZM11.875 16.5625C11.8621 17.1875 11.6504 17.705 11.24 18.115C10.8296 18.525 10.3121 18.7367 9.6875 18.75C9.0625 18.7371 8.545 18.5254 8.135 18.115C7.725 17.7046 7.51333 17.1871 7.5 16.5625C7.51292 15.9375 7.72458 15.42 8.135 15.01C8.54542 14.6 9.06292 14.3883 9.6875 14.375C10.3125 14.3879 10.83 14.5996 11.24 15.01C11.65 15.4204 11.8617 15.9379 11.875 16.5625ZM10.625 16.5625C10.6121 16.3021 10.5177 16.084 10.3419 15.9081C10.166 15.7323 9.94792 15.6444 9.6875 15.6444C9.42708 15.6444 9.20896 15.7323 9.03312 15.9081C8.85729 16.084 8.76937 16.3021 8.76937 16.5625C8.76937 16.8229 8.85729 17.041 9.03312 17.2169C9.20896 17.3927 9.42708 17.4806 9.6875 17.4806C9.94792 17.4806 10.166 17.3927 10.3419 17.2169C10.5177 17.041 10.6121 16.8229 10.625 16.5625Z"
            fill="currentcolor"
          />
        </svg>
      </button>
    </>
  )
}
