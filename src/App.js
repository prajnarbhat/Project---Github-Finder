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
        setUsers(response.data.slice(0, 6))
      }
      fetchData();

    },[])
    // useEffect to render the data

    const searchData = async(name) =>{
        const response = await axios.get(`https://api.github.com/search/users?q=${name}`)

        setUsers(response.data.items)
        setClear(true)    
    }
    

    return (       
        <>
            <Router> {/* Router should wrap everything */}
                <Navbar />
                
                <div className="container">
                    <Routes>   
                        <Route exact path="/" element = {
                                <>
                                    <Search searchData = {searchData} showClear={showClear} users = {users}/>
                                    <User users = {users}/>
                                </>
                            
                        }/>  
                        
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/users/:username" element={<UserDetail/>} /> 
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
