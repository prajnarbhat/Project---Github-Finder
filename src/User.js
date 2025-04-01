import React from "react";
import { Link } from "react-router-dom";
import UserItem from "./UserItem";

const User = (props) => {
    const arrayOfUserData = props.users;
    
    return (
        <div style={containerStyle}>
        <div style = {userStyle}>
            {arrayOfUserData.map((user,index) => (
                <Link to={`/users/${user.login}`} style={{ textDecoration: "none" }}>
                <div key={index}> <UserItem user = {user}/> </div>
                </Link>
            ))}
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

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",   
    width: "100%",
};
export default User;