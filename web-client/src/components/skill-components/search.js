import React from 'react';

export default (props) => {
return (

  <input className="searchbox" onKeyDown={props.searchHandle} type="search" id="search" placeholder=" Search..." />

 )
}

