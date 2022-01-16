import './Switcher.css'
export default function Switcher() {
  return (
    <div className="switch-wrapper">
      <p5 className="switch__description">Night Mode</p5>
      <div className="switch">
        <input className="checkbox" type="checkbox"></input>
        <label className="switch__ball"></label>
      </div>
    </div>
  )
}
