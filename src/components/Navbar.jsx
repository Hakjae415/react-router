import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <div id="navbar">
        <Link className="link" to={"/"}>Home</Link>
        <Link className="link" to={"/blue"}>Blue</Link>
        <Link className="link" to={"/red"}>Red</Link>
        <Link className="link" to={"/list"}>List</Link>
      </div>
    )
}

export default Navbar