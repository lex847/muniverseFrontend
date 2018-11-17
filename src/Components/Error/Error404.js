import React from 'react';
import './Error404.css';
import Button from '@material-ui/core/Button';

function Error404() {
    return (
    	<div className="center">
    		<style>{'body { background-color: #1da1f2; }'}</style>
    		<h1>The Page Was Not Found</h1>
	        <h2 color="green">Ain't no music here!</h2>
	        <p>Sorry, but the page you're looking for is not found, has its name changed or is removed.</p>
	        <Button variant="contained" color="secondary">
        		Secondary
      		</Button>
	    </div>
	    
    )
}

export default Error404;
