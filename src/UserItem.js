import React from "react";
import { Link } from "react-router-dom";
const UserItem = (props) => {
    console.log("Props data inside userItem:", props);
    console.log("Gives an object data:",props.user);
    console.log(props.user.login);
    console.log(props.user.avatar_url)
    // object destructure pass the data to the object if the properties are similar
    const { login, avatar_url } = props.user
    return (
        <div className="card">
            <img src={avatar_url} alt="Avatar"style={{width: "100px",height:"100px"}}/>
            <div className="user-intro">
            <h3> {login} </h3>
            <Link to="/" className="btn">More</Link>
            </div>
      </div>
    )

}

export default UserItem;