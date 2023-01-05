import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const PigNew = ({ createPig }) => {
  const navigate = useNavigate();
  const [newPig, setNewPig] = useState({
    name: "",
    breed: "",
    habits: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewPig({ ...newPig, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createPig(newPig);
    navigate("/PigIndex");
  };

  return (
    <>
      <h1>Create a new pig</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            placeholder="What is your name?"
            name="name"
            onChange={handleChange}
            value={newPig.name}
          />
          <Label for="breed">Breed</Label>
          <Input
            type="text"
            placeholder="What is your breed?"
            name="breed"
            onChange={handleChange}
            value={newPig.breed}
          />
          <Label for="habits">Habits</Label>
          <Input
            type="text"
            placeholder="What are your habits?"
            name="habits"
            onChange={handleChange}
            value={newPig.habits}
          />
          <Label for="image">Image</Label>
          <Input
            type="url"
            placeholder="What do you look like?"
            name="image"
            onChange={handleChange}
            value={newPig.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">
          Submit Pig
        </Button>
      </Form>
    </>
  );
};

export default PigNew;
