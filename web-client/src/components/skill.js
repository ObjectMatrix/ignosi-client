import React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


export default (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{ props.qeLessonName }</CardTitle>
          <CardSubtitle>{ props.qeDomainName }</CardSubtitle>
          <CardText>
          { props.qeObjective }{"\n"}
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


