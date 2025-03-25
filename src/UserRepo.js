import RepoLink from "./RepoLink";

const UserRepo =(props) => {
    
    // here we get arrayOf data
    const arrayOfRepos = props.userrepo || []; 
    //console.log("Individual repo details:", arrayOfRepos);

    return (
        <div className="repo-details">
            {arrayOfRepos.map((repo, index) => (
                <div key={index}>
                    <RepoLink repo={repo}/>
                </div>
            ))}
        </div>
    )


}

export default UserRepo;