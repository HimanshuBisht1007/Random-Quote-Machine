import React from 'react'
// import Icon from './icon.jpg'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <img src="https://icon-library.com/images/quote-icon-png/quote-icon-png-7.jpg" alt="quote" style={{height:'40px'}}/>
    <span className="navbar-brand" style={{position: 'fixed',marginInlineStart: '60px'}}>Random Quote Machine</span>    
  </div>
</nav>
    </div>
  )
}

export default Navbar
