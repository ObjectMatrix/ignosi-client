import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'


export default (props) => {
  //console.log(props.hints)
  return (<div className="hint" dangerouslySetInnerHTML={{ __html: props.hint }} />
  );
 };
