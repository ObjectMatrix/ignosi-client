import React from 'react';
import { Link } from 'react-router-dom';
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
          {/* <Button onClick={props.handle}>View: {props.qeLessonName}</Button> */}
          <Link key={props.qeLessonName} to={{ pathname: `/quiz/${props.qeLessonName}`, state: { lessonName:`${props.qeLessonName}`}}}>
            <Button>View: {props.qeLessonName}</Button>
          </Link>
          {/* <Button>Edit</Button> */}
        </CardBody>
      </Card>
    </div>
  );
 };
//onClick={()=>{this.handleRemove(id)}}

