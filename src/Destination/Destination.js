import React, { useContext } from 'react';
import './Destination.css';
import img from '../image/image 6.png' 
import { useHistory } from 'react-router';
import FinalDestination from '../FinalDestination/FinalDestination';
import { DestinationContext, UserContext } from '../App';

const Destination = () => {
    const history = useHistory();
    
    
    const[pick,setPick]=useContext(DestinationContext);
    const FinalDestination =(place)=>{
        let isFormValid= true;
        if(place.target.name === 'stay'){
            const Pickup= place.target.value;
            console.log(Pickup)
        }
        if(place.target.name === 'move'){
            const Pickto= place.target.value;
            console.log(Pickto)  
        }
if( isFormValid){
   const destination = {...pick};
    console.log(destination)
    destination[place.target.name] = place.target.value;
    setPick(destination);

}
        
    }

    const handleDestination = ()=>{
        history.push('/finaldestination')
        const destination = {...pick};
        console.log(destination)
     }
     

    return ( <div className='Destination'>
<div className='pick-form'>
            <p><b >Pick from</b></p>
            <input onBlur={FinalDestination} name='stay' type='text' placeholder=" pick from" required></input>
            <p><b >     Pick to</b></p>
            <input onBlur={FinalDestination} name='move' type='text' placeholder=" pick to" required></input><br/><br/>
            <button className='Final-Button' onClick= {handleDestination} >Search</button>
        </div>
        <div className='image-Box'>
            <img src={img}/>
        </div>
    
    </div>
        
        
    );
};

export default Destination;