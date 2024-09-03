import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Contact from '../pages/Contact'


const Routing = () =>{
return(

        <Routes>
        <Route path="/" element={""}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Register" element={<Register/> } />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Contact" element={<Contact />}/>
        </Routes>

)

}
export default Routing;