
import Logo from "./Logo/Logo";
import './App.css'
import Box from "./Box/Box";
import NotMatch from './NotMatch/NotMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Destination from "./Destination/Destination";
import Login from "./Login/Login";
import FinalDestination from "./FinalDestination/FinalDestination";
import { createContext, useState } from "react";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ThankYou from "./ThankYou/ThankYou";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";

export const UserContext = createContext();
export const DestinationContext = createContext();

function App() {
  const[logginuser,setLogginUser] = useState({})
  const [pick,setPick] = useState({})
  return (    
    
<div className='App'>


<UserContext.Provider value={[logginuser,setLogginUser]}>
  <DestinationContext.Provider value={[pick,setPick]}>

  
<p className='email'>Email: {logginuser.email}</p>

<Router>
  
  <Switch>
  
   <Route path='/home'>
   <Logo></Logo>
   <Box></Box>
   </Route>
  
   <Route exact path='/'>
   <Logo></Logo>
   <Box></Box>
   </Route>

   <PrivateRoute path='/destination'>
   <Logo></Logo>
   <Destination></Destination>
   </PrivateRoute>
   
   <Route path='/finaldestination'>
   <Logo></Logo>
   <FinalDestination></FinalDestination>
   </Route>

   <Route path='/blog'>
   <Logo></Logo>
   <Blog></Blog>
   </Route>

   <Route path='/contact'>
   <Logo></Logo>
   <Contact></Contact>
   </Route>

   <Route path='/login'>
   <Logo></Logo>
   <Login></Login>
   </Route>

   <Route path='/thank you'>
   <Logo></Logo>
   <ThankYou></ThankYou>
   </Route>

   <Route  path='/*'>
   <NotMatch></NotMatch>
   </Route>

   </Switch>
   </Router>
   </DestinationContext.Provider>
</UserContext.Provider>

  
 

</div>
    
    
   
  );
}

export default App;
