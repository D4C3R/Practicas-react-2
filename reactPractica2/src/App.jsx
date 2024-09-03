import React from "react";
import Routing from "./routes/routing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'




function App() {
  return(
     <div>
      <Router>
        <Routing/>
      </Router>  
      </div>
  )
}

export default App;
