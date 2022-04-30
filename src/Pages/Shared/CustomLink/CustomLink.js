import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match? "white" : "bisque",
                    backgroundColor: match? "rgb(197, 53, 55)" : "rgb(33, 37, 41)",
                    padding: match? "5px 15px" : "0px",
                    borderRadius: match? "2px" : "2px",
                }}
                to={to}
                {...props}
            >
            {children}
            </Link>
        </div>
    );
};

export default CustomLink;