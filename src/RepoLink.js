import React from "react";
const RepoLink = (props) => {
    console.log("Repo details need to prioned in form of link:", props);
    const Individualreponame = props.repo.name;
    return (
        <>
            <a className="button-search" href={props.repo.html_url}> {Individualreponame} </a>
            
        </>
    )
}

export default RepoLink;