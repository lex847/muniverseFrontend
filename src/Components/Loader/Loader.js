import React from 'react';
import './Loader.css'
const Loader = (props) => {
    return (
        <div className="loader">
            <div className="line-scale-pulse-out">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            Something fishy going on.
        </div>
    )
}
export default Loader;