import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RepoDetails from "./RepoDetails";

const UserDetail = () => {
    const { anything } = useParams();  // Get the username from the URL
    const [userDetail, setUserDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${anything}`);
                setUserDetail(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching user data:", error);
                setLoading(false);
            }
        };

        fetchUser();
    }, [anything]);

    if (loading) return <h3>Loading user details...</h3>;
    if (!userDetail) return <h3>User not found</h3>;

    return (
        <>  
            <div className="user-container">
            <div>
                <Link to="/" className="back-button"> &#8249; Previous </Link>
            </div>
            <br></br>
            <div className="card-detail">
                <div className="intro-page">
                    <img className="avatar"
                        src={userDetail.avatar_url}
                        alt="Avatar"
                    />
                    <p className="username"> <strong>Username: {userDetail.login} </strong></p>
                    {userDetail.location && <p>Location: {userDetail.location} </p>} 
                    <br></br>
                   
                </div>
                <div className="detail-page">
                    
                    <div>
                         {userDetail.bio && <p><strong>Bio:</strong> {userDetail.bio} </p>}
                    </div>
                    <br></br>
                    <a href={userDetail.html_url}>
                        Visit GitHub Profile
                    </a>
                    <br></br>
                     {userDetail.company && <p><strong>Company:</strong> {userDetail.company} </p>}
                     <br></br>
                <div className="followers-page">
                    <div className="block"> <strong>Followers: </strong> {userDetail.followers ?? "N/A"}</div>
                    <div className="block"> <strong>Following: </strong> {userDetail.following ?? "N/A"}</div>
                    <div className="block"> <strong>Public Repos: </strong> {userDetail.public_repos ?? "N/A"}</div>
                    <div className="block"> <strong>Public Gists: </strong> {userDetail.public_gists ?? "N/A"}</div>
                </div>
                <br></br>
                </div>
               </div>
               <br></br>
               
                <p className="username"> Repositories:</p>
                <div className="repo-details">
                    
                    <RepoDetails repos={{anything}}/>

                </div>
            </div>
        </>
    );
};

export default UserDetail;
