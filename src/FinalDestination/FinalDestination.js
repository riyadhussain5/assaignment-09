import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { DestinationContext } from '../App';
import './FinalDestination.css'

const FinalDestination = () => {
    const history = useHistory()
  const[pick,setPick]=useContext(DestinationContext)
  const Thank = ()=>{
    
    history.push('/thank you');}
    return (
        <div className='Final-Form' style={{border:"4px solid gray"}}>
            <h1>This is final Approval</h1>
            <div>
            <p >{pick.stay} to {pick.move}</p>
            </div>
           
            <p>Total Cost : 250Taka</p>
            <button className='Final-Button' onClick={Thank} >Confirm</button>
            
            </div>
        
        
        );
    };

export default FinalDestination;