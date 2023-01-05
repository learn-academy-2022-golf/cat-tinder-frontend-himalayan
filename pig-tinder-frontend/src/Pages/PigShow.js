import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
const PigShow = ({ pigs, deletePig }) => {
  const { id } = useParams();

  

  const pig = pigs?.find((pig) => pig.id === +id);

  return (
    <Card className="my-2">
      <CardImg
        alt="Card image cap"
        src={pig.image}
        style={{
          height: 180,
        }}
        top
        width="100%"
      />
      <CardBody>
        <CardTitle tag="h5">{`${pig.name}, ${pig.breed}`}</CardTitle>
        <CardText>{pig.habits}</CardText>
      </CardBody>
      <NavLink to={`/PigEdit/${pig.id}`} className="nav-link">
        <Button>Edit Pig</Button>
      </NavLink>
      <NavLink to={`/PigIndex`} className="nav-link">
      <Button onClick={() => deletePig(`${pig.id}`)}>Delete Pig</Button>
    </NavLink>
    </Card>
  );
};

export default PigShow;
