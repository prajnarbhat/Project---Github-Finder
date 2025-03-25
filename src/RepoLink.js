import React from "react";
const RepoLink = (props) => {
    console.log("Repo details need to prioned in form of link:", props);
    const Individualreponame = props.repo.name;
    return (
        <div className="repo">
            <h3>
                <a href={props.repo.html_url}> {Individualreponame} </a>
            </h3>
        </div>
    )
}

export default RepoLink;