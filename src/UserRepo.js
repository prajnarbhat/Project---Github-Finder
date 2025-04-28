import RepoLink from "./RepoLink";

const UserRepo = (props) => {
    const arrayOfRepos = props.userrepo; 
    const page = props.page;
    const setPage = props.setPage;
    const totalPages = props.totalPages;

    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= totalPages) {
            setPage(selectedPage);
        }
    };

    return (
        <>
            {arrayOfRepos.length > 0 && (
                <div className="repo-detail">
                    {arrayOfRepos.map((repo, index) => (
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
                        <button className="previous">&laquo; Previous</button>
                    </span>

                    {/* Page numbers */}
                    {[...Array(totalPages)].map((_, i) => (
                        <span 
                            key={i} 
                            onClick={() => selectPageHandler(i + 1)} 
                            className={page === i + 1 ? "pagination-selected" : ""}
                        >
                            {i + 1}
                        </span>
                    ))}

                    <span 
                        className={page < totalPages ? "" : "pagination_disabled"} 
                        onClick={() => selectPageHandler(page + 1)}
                    >
                        <button className="next">Next &raquo;</button>
                    </span>
                </div>
            )}
        </>
    );
};

export default UserRepo;
