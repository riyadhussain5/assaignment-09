import React from 'react';
import { Link } from 'react-router-dom';
import './Box.css';
const Box = () => {
    return (
        <div className='all-Text'>
            <div className='first-Box'>
            
            <h1 style={{color: 'white'}}><b>One time ticket</b></h1>
            <button className='click'><b><Link to='/destination' className='text'> Buy Now</Link></b></button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{color: 'white'}}>$100</h1>
       
</div>
          
          <div className='second-Box'>
          <h1 style={{color: 'white'}}><b>One time ticket</b></h1>
          <button className='click'><b><Link to='/destination' className='text'> Buy Now</Link></b></button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{color: 'white'}}>$100</h1>
            
            
</div>            
          <div className='third-Box'>
          <h1 style={{color: 'white'}}><b>One time ticket</b></h1>
          <button className='click'><b><Link to='/destination' className='text'> Buy Now</Link></b></button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{color: 'white'}}>$100</h1>
           
            
 </div>     
          <div className='fourth-Box'>
          <h1 style={{color: 'white'}}><b>One time ticket</b></h1>
            <button className='click'><b><Link to='/destination' className='text'> Buy Now</Link></b></button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1 style={{color: 'white'}}>$100</h1>

 </div>
        </div>
    );
};

export default Box;