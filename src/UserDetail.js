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
            <div class="user-container">
            <div class="user-page">
            <Link to="/" className="button-search">Back to Search</Link>
            <p>Hirable: {userDetail.hireable ? <i className="fa fa-check correct"></i> : <i className="fas fa-times incorrect"></i>}</p>
            </div>
            <div className="card-detail">
                <div class="intro-page">
                    <img className="avatar"
                        src={userDetail.avatar_url}
                        alt="Avatar"
                    />
                    <p className="username"> <strong>Username: {userDetail.login} </strong></p>
                     {userDetail.location && <p>Location: {userDetail.location} </p>} 
                </div>
                <div className="detail-page">
                    <div>
                         {userDetail.bio && <p><strong>Bio:</strong> {userDetail.bio} </p>}
                    </div>
                    <br></br>
                    <a href={userDetail.html_url}  style={{width:"200px"}} className="button-search">
                        Visit GitHub Profile
                    </a>
                    <br></br>
                     {userDetail.company && <p><strong>Company:</strong> {userDetail.company} </p>}
                </div>
               </div>
               <br></br>
                <div class="followers-page">
                    <div className="block">Followers: {userDetail.followers ?? "N/A"}</div>
                    <div className="block">Following: {userDetail.following ?? "N/A"}</div>
                    <div className="block">Public Repos: {userDetail.public_repos ?? "N/A"}</div>
                    <div className="block">Public Gists: {userDetail.public_gists ?? "N/A"}</div>
                </div>
                <br></br>
                <div className="repo-details">
                    <p className="username"> Repositories:</p>
                    <RepoDetails repos={{anything}}/>

                </div>
            </div>
        </>
    );
};

export default UserDetail;
