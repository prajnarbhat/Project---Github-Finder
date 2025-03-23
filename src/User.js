import React from "react";
import UserItem from "./UserItem";

const User = (props) => {
    console.log("Props data:",props);
    const arrayOfUserData = props.users;
    
    return (
        <div style={containerStyle}>
        <div style = {userStyle}>
            {arrayOfUserData.map((user) => (
                <div> <UserItem user = {user}/> </div>
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
};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(200px, 1fr))",
    gap: "20px",  
    maxWidth: "1200px", 
    width: "100%",
};
export default User;