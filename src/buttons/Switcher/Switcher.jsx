import './Switcher.css'
export default function Switcher() {
  return (
    <div className="switch-wrapper">
      <p className="p5 switch__description">Night Mode</p>
      <div className="switch">
        <input className="checkbox" type="checkbox"></input>
        <label className="switch__ball"></label>
      </div>
    </div>
  )
}
