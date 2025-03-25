import React from "react";
import UserItem from "./UserItem";

const User = (props) => {
    console.log("User props data:",props)
    const arrayOfUserData = props.users;
    
    return (
        <div style={containerStyle}>
        <div style = {userStyle}>
            {arrayOfUserData.map((user,index) => (
                <div key={index}> <UserItem user = {user}/> </div>
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