import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./About";
import Navbar from "./Navbar";
import User from "./User";

function App() {
    
    // use useState to display data fetched
    const [ users, setUsers] = useState([])
    useEffect(async() => {
        const response = await fetch('https://api.github.com/users')
        console.log("Response data:", response);
        const data = await response.json();
        console.log("Data fetchde:", data);
        setUsers(data)
    },[])
    // useEffect to render the data

    return (       
        <>
            <Router> {/* Router should wrap everything */}
                <Navbar />
                <User users = {users}/>
                <div className="container">
                    <Routes>    
                        <Route exact path="/about" element={<About />} />   
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
