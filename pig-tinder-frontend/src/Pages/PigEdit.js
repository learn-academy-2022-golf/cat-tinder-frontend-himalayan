import { useParams, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import React, { useState } from "react";

const PigEdit = ({ pigs, updatePig }) => {
  const { id } = useParams();
  let currentPig = pigs?.find((pig) => pig.id === +id);
  const navigate = useNavigate();
  const [editPig, setEditPig] = useState({
    id: currentPig.id,
    name: currentPig.name,
    breed: currentPig.breed,
    habits: currentPig.habits,
    image: currentPig.image,
  });
  const handleChange = (e) => {
    setEditPig({ ...editPig, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    updatePig(editPig);
    navigate(`/PigShow/${id}`);
  };
  return (
    <>
      <h1>Edit this pig</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            placeholder="What is your name?"
            name="name"
            onChange={handleChange}
            value={editPig.name}
          />
          <Label for="breed">Breed</Label>
          <Input
            type="text"
            placeholder="What is your breed?"
            name="breed"
            onChange={handleChange}
            value={editPig.breed}
          />
          <Label for="habits">Habits</Label>
          <Input
            type="text"
            placeholder="What are your habits?"
            name="habits"
            onChange={handleChange}
            value={editPig.habits}
          />
          <Label for="image">Image</Label>
          <Input
            type="url"
            placeholder="What do you look like?"
            name="image"
            onChange={handleChange}
            value={editPig.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Pig
        </Button>
      </Form>
    </>
  );
};

export default PigEdit  
