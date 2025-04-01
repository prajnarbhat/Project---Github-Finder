import { useState } from "react";
import RepoLink from "./RepoLink";

const UserRepo = (props) => {
    const arrayOfRepos = props.userrepo; 
    console.log("Individual repo details:", arrayOfRepos);

    const [page, setPage] = useState(1);

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= Math.ceil(arrayOfRepos.length / 4) && selectedPage !== page) {
            setPage(selectedPage);
        }
    };

    return (
        <>
            {arrayOfRepos.length > 0 && (
                <div className="repo-detail">
                    {arrayOfRepos.slice((page * 4) - 4, page * 4).map((repo, index) => (
                        <p key={index}>
                            <RepoLink repo={repo} />
                        </p>
                    ))}
                </div>
            )}

            {arrayOfRepos.length > 0 && (
                <div className="pagination">
                    <span 
                        className={page > 1 ? "" : "pagination_disabled"} 
                        onClick={() => selectPageHandler(page - 1)}
                    >
                        <a href="#" className="previous"> &laquo; Previous</a>
                    </span>

                    {[...Array(Math.ceil(arrayOfRepos.length / 4))].map((_dirname, i) => (
                        <span 
                            key={i} 
                            onClick={() => selectPageHandler(i + 1)} 
                            className={page === i + 1 ? "pagination-selected" : ""}
                        >
                            {i + 1}
                        </span>
                    ))}

                    <span 
                        className={page < Math.ceil(arrayOfRepos.length / 4) ? "" : "pagination_disabled next"} 
                        onClick={() => selectPageHandler(page + 1)}
                    >
                        <a href="#">Next &raquo;</a>
                    </span>
                </div>
            )}
        </>
    );
};

export default UserRepo;
