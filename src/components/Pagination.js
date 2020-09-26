import React from 'react';

const Pagination = (props) => {
    let { postPerPage, totalPosts,paginate } = props;
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumber.map((val, i) => (
                    <li key={i} className="page-item">
                        <a onClick={()=>{paginate(val)}} href="#" className="page-link">
                            {val}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>);
}
export default Pagination;