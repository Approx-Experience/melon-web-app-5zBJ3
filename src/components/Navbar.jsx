const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='./images/logo.svg' alt='logo' />
          <button type='button' className='nav-toggle'>
            <span className='icon'></span>
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <button type='button' className='btn'>
          Sign Up
        </button>
      </div>
    </nav>
  )
}
export default Navbar
