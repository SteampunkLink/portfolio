const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left"><h1>Neon Thorium</h1></div>
      <div className="nav-right">
        <label htmlFor="theme-picker">Choose a Theme</label>
        <select id="theme-picker">
          <optgroup label="plain themes">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="paper">Paper</option>
          </optgroup>
          <optgroup label="fun themes">
            <option value="space">Space</option>
            <option value="retro_mac">Retro Mac</option>
            <option value="vaporwave">Vaporwave</option>
            <option value="90s">90s</option>
          </optgroup>
        </select>
      </div>
    </div>
  )
}

export default Navbar
