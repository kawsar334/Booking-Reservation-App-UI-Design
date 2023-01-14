import { NavLink } from "react-router-dom"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <NavLink  to="/" className="logo">Booking.com</NavLink >
        <div className="navItems">
          <NavLink to="/hotels/:id">

          <button className="navButton">Hotels</button>
          </NavLink>
          <NavLink to="/login">
          <button className="navButton">Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar