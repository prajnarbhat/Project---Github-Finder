import axios from "axios";
import { useEffect, useState } from "react";
import UserRepo from "./UserRepo";

const RepoDetails = (props) => {
    // here we get the login name
    const loginname = props.repos.anything;
    const [ repos, setRepos ] = useState("")

    useEffect(() => {
        const fetchRepoDetails = async() => {
            try {
                const response = await axios.get(`https://api.github.com/users/${loginname}/repos?per-page=5&sort=asc`)
                const data = response.data;
                setRepos(data);
            }
            catch (error) {
                console.log("Error fetching repo details:", error);
            }
        }
        fetchRepoDetails();
    },[loginname])


    return (
        <>
            <div> {<UserRepo userrepo={repos}/>} </div>
        </>
    )

}

export default RepoDetails;