import {
    Routes, Route
  } from 'react-router-dom';
import Login from './login';



  
  
  const routes = (
      <Routes>
           <Route path = "/" element={<Login/>}/>
           
      </Routes>
  )
  
  export default routes