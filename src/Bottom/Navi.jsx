import React from 'react'
import './Navi.css'
import {Link} from 'react-router-dom'
const Navi = () => {
  return (
    <div>
        <div className='nav'>
        <nav>
            <ul>
                <Link to="/"><li> Home</li></Link>
                <Link to="/work"><li> Work</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Navi