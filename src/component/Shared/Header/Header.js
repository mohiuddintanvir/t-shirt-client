import React, { useContext } from 'react';
import logo from '../../../img/logo1.png'
import { Link } from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import { BiShoppingBag} from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import './header.css'
import { AuthContext } from '../../../Context/AuthProvider';


const Header = () => {






const {user,logOut}=useContext(AuthContext);



// log out set up 
const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.error(err))
}
   
    const menulink=<>
      <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
      <li className="nav-item"><Link to='/shop' className="nav-link">Shop</Link></li>
      <li className="nav-item"><Link to='/blog' className="nav-link">Blog</Link></li>
      <li className="nav-item"><Link to='/about' className="nav-link">About</Link></li>
      

{user?.uid ? 
<>
<li className="nav-item"><Link to='/deshboard' className="nav-link">Deshboard</Link></li>
    <li className="nav-item"><button onClick={handleLogOut} className="nav-link">LogOut</button></li>
</>
:
    <li className="nav-item"><Link to='/login' className="nav-link">LogIn</Link></li>
}
      
      
                
          
    
    </>




    return (
        <div >
            {/* Navber */}
            <nav className="navbar navbar-expand-lg navber-light bg-white py-3 head fixed-top">
  <div className="container">
    <img src={logo} alt="" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span  className='ber'><FaBars id='ber' /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        
        {
       
        menulink
        }
        
        
      </ul>
      <form className="d-flex" role="search">
        
    
      </form>
    </div>
  </div>
</nav>
             



        </div>
    );
};

export default Header;