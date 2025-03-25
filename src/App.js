import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import Search from './Search';
import User from "./User";
import UserDetail from "./UserDetail";

function App() {
    
    // use useState to display data fetched
    const [ users, setUsers] = useState([])
    const [ showClear, setClear] = useState(false)
    useEffect(() => {
        const fetchData = async() => {
        const response = await axios.get('https://api.github.com/users')
        setUsers(response.data)
      }
      fetchData();

    },[])
    // useEffect to render the data

    const searchData = async(name) =>{
        const response = await axios.get(`https://api.github.com/search/users?q=${name}`)
        console.log("Response data os searchuser:", response.data);
        setUsers(response.data.items)
        setClear(true)    
    }

    const clearUser = () => {
        setUsers([])
        setClear(false) 
    }
    // So we need to props when user goes to /
    // render is a function it will take props as arguments and return the components need to be rendered 
    

    return (       
        <>
            <Router> {/* Router should wrap everything */}
                <Navbar />
                
                <div className="container">
                    <Routes>   
                        <Route exact path="/" element = {
                                <>
                                    <Search searchData = {searchData} showClear={showClear} clearUser={clearUser}/>
                                    <User users = {users}/>
                                </>
                            
                        }/>  
                        
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/users/:anything" element={<UserDetail/>} /> 
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
