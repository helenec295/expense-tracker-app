import "./Header.css"
import React from 'react'
import Piggy from '../images/piggy2.jpg';

function Header() {
  return (
    <div className='header' style={{ backgroundImage: `url(${Piggy})` }}>
        <h1>Expense <br/> Tracker</h1>
    </div>
  )
}

export default Header