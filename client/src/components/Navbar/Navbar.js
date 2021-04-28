import React, {Component}  from 'react'
import './Navbar.css'
import UpdateProfile from '../../pages/UpdateProfile'
import { Link } from 'react-router-dom'
import Logout from '../../functionality/Logout'

function loggingOut(){
    const handlingLogout = () => {
        onclick={Logout}
    }
}

class Navbar extends Component {
    state = { clicked:false}
    handleClick = ()=> {
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                <Link to="./" className="links" style={{textDecoration:"none"}}>
                   Player <i class="fab fa-react"></i>
                </Link>
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

                        <li className='nav-links' href="#">
                            <a>
                            <Link to="./" className="links" style={{textDecoration:"none"}}>
                                Home
                            </Link>
                            </a>
                        </li>
                        <li className='nav-links' href="#">
                            <a>
                            <Link to="./contact" className="links" style={{textDecoration:"none"}}>
                                Contact Us
                            </Link>
                            </a>
                        </li>
                        <li className='nav-links' href="#">
                        <Link to="./about" className="links" style={{textDecoration:"none"}}>
                                About Us
                            </Link>
                        </li>   
                        <li className='nav-links' href="#">
                        <Link to="./support" className="links" style={{textDecoration:"none"}}>
                                Support
                            </Link>
                        </li>
                        <li className='nav-links' href="#">
                            <a>
                            </a>
                        </li>
                </ul>
                <div class="dropdown">
                <button class="dropbtn">Settings</button>
                <div class="dropdown-content">
                    <a href="#"><Link to="./updateProfile">Profile</Link></a>
                    <a onClick={loggingOut}>Logout</a>
                </div>  
</div>
            </nav>
        )
    }
}

export default Navbar