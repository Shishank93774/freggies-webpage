import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="title-container">Freggies</div>
      <div className="links-container">
        <ul className="links">
          <li className="link"> <a href="#home"> Home </a> </li>
          <li className="link"> <a href="#about"> About </a> </li>
          <li className="link"> <a href="#cart"> Cart </a> </li>
          <li className="link"> <a href="#fruits"> Fruits </a> </li>
          <li className="link"> <a href="#vegetables"> Vegetables </a> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar