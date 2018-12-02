import React from 'react';

export default (props) => {
return (
 <div>
  <input className="searchbox" onKeyDown={props.searchHandle} type="search" id="search" placeholder=" Search..." />
 </div>
 )
}

