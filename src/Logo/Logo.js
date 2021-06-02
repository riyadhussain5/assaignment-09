import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import img from '../image/Group 33141-1.png';
import  './Logo.css';
const Logo = () => {

    const [logginuser,setLogginUser] = useContext(UserContext);
    
    return (
        <div className='header'>

            <img  src={img}/>
       

<nav>
                <Link to ='./home'><b>Home</b></Link>
                <Link to='./destination'><b>Destination</b></Link>
                <Link to='./blog'><b>Blog</b></Link>
                <Link to='./contact'><b>Contact</b></Link>
               
                <button  onClick={()=>setLogginUser({})} className='Login'><b ><Link to='/login'>{logginuser.email ?'Logout':'Login'}</Link></b></button>
                
                

              
</nav>


</div>

        
        
    );
};

export default Logo;