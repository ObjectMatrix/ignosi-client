import React from 'react';
import { Link } from 'react-router-dom'
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'


export default (props) => {
  console.log(props.answers)
  return (
    <div>
      <Card>
        <CardBody>
          <CardText
         //  dangerouslySetInnerHTML={{ __html: props.pbPassage }}
          />
        </CardBody>
      </Card>
    </div>
  );
 };


