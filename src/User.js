import React from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

const User = (props) => {
    const arrayOfUserData = props.users;
    
    return (
        <div style={containerStyle} className="container-style">
        <div className="user-style">
            {arrayOfUserData.length > 0 ? <>
            {arrayOfUserData.map((user,index) => (
                <Link to={`/users/${user.login}`} style={{ textDecoration: "none" }}>
                <div key={index}> <UserItem user = {user}/> </div>
                </Link>
            ))} </> : <h3> User not found </h3> }
        </div>
        </div>
    )
}
const containerStyle = {
    display: "flex",
    justifyContent: "center",  
    alignItems: "center",       
    padding: "20px",
    marginTop: "30px"        
};



export default User;