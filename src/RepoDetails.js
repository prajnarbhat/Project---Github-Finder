import axios from "axios";
import { useEffect, useState } from "react";
import UserRepo from "./UserRepo";

const RepoDetails = (props) => {
    const loginname = props.repos.username;
    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                // Fetch public repo count first
                const userResponse = await axios.get(`https://api.github.com/users/${loginname}`);
                const publicRepos = userResponse.data.public_repos;
                setTotalPages(Math.ceil(publicRepos / itemsPerPage));

                // Then fetch repos for the current page
                const repoResponse = await axios.get(`https://api.github.com/users/${loginname}/repos?page=${page}&per_page=${itemsPerPage}`);
                setRepos(repoResponse.data);
            }
            catch (error) {
                console.log("Error fetching details:", error);
            }
        };
        fetchUserDetails();
    }, [loginname, page, itemsPerPage]);

    return (
        <>
            <div>
                <UserRepo userrepo={repos} page={page} setPage={setPage} totalPages={totalPages}/>
            </div>
        </>
    );
};

export default RepoDetails;
