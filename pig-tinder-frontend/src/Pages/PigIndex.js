import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
const PigIndex = ({ pigs}) => {
  


  return (
    
    <main className="pig-index-cards">
      
      <div>
        {pigs?.map((pig, index) => {
          return (
            <Card
              style={{
                width: "18rem",
              }}
              key={index}
            >
              <img alt={`profile of a pig named ${pig.name}`} src={pig.image} />
              <CardBody>
                <CardTitle tag="h5">{pig.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {pig.breed}
                </CardSubtitle>
                <NavLink to={`/PigShow/${pig.id}`} className="nav-link">
                  <Button>See more about me</Button>
                </NavLink>
                <NavLink to={`/PigEdit/${pig.id}`} className="nav-link">
                  <Button>Edit Pig</Button>
                </NavLink>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default PigIndex;
