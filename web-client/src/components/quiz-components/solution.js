import React from 'react';



export default (props) => {
  return ( <div className="solution" dangerouslySetInnerHTML={{ __html: props.solution }} />
)
 };
