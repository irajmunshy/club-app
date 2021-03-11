import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="error">
            <h3><span>404.</span> That’s an error.</h3>
            <h4>The requested URL /w was not found on this server.</h4>
        </div>
    );
};

export default NotFound;