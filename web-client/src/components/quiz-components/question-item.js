import React from 'react';

export default (props) => {
  const contents = ['(', props.seq,')', props.question].join(' ')
  return (<div className="question" dangerouslySetInnerHTML={{ __html: contents}} />)
 }



