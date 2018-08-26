import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


export default (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>Level: { props.qeGrade } { props.qeSubject }</CardTitle>
          <CardSubtitle>{ props.qeObjective }:</CardSubtitle>
          <CardText>
          { props.qeSkill }{"\n"}
          { props.qeSubSkill }{"\n"}
          { props.qeSubSubSkill }
          </CardText>
          <Button>View</Button> <Button>Edit</Button>
        </CardBody>
      </Card>
    </div>
  );
 };


