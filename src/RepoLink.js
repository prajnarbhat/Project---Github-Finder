import React from "react";
const RepoLink = (props) => {
    const Individualreponame = props.repo.name;
    return (
        <>
            <a className="block click-links" href={props.repo.html_url}> {Individualreponame} </a>
            
        </>
    )
}

export default RepoLink;