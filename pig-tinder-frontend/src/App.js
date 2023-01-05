  import React, {useState, useEffect} from "react"
  import Footer from "./Components/Footer";
  import Header from "./Components/Header";
  import PigEdit from "./Pages/PigEdit";
  import PigIndex from "./Pages/PigIndex";
  import PigNew from "./Pages/PigNew";
  import PigShow from "./Pages/PigShow";
  import Home from "./Pages/Home";
  import NotFound from "./Pages/NotFound";
  import "./App.css";
  import mockPigs from "./mockPigs";
  import { Routes, Route } from "react-router-dom";
  
  const App = () => {
    const [pigs, setPigs] = useState(null);
    const [newPig, setNewPig] = useState(null);
    const [updatedPig, setUpdatedPig] = useState(null);
    const [deletedPig, setDeletedPig] = useState(null);
  
    // This function makes an HTTP GET request to read all pigs from your Rails app
    const fetchPigs = () => {
      fetch("http://localhost:3000/pigs")
        .then((response) => response.json())
        .then((pigs) => setPigs(pigs))
        .catch((error) => console.error(error));
    };
    useEffect(() => {
      fetchPigs() 
      }, [])
    // This function makes an HTTP POST request to create a new pig in your Rails app
    const createPig = (pig) => {
      fetch("http://localhost:3000/pigs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pig }),
      })
        .then(() => {
          console.log("Created pig:", pig);
          setNewPig(pig);
        })
        .catch((error) => console.error(error));
    };
  
    // This function makes an HTTP PATCH request to update an existing pig in your Rails app

  // // This function makes an HTTP PATCH request to update an existing pig in your Rails app
  const updatePig = (pig) => {
    fetch(`http://localhost:3000/pigs/${pig.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pig }),
    })
      .then(() => {
        console.log("Updated pig:", pig);
        setUpdatedPig(pig);
      })
      .catch((error) => console.error(error));
  };

  // // This function makes an HTTP DELETE request to delete an existing pig in your Rails app
  const deletePig = (id) => {
    fetch(`http://localhost:3000/pigs/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then((payload) => fetchPigs())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PigIndex" element={<PigIndex pigs={pigs} />} />
        <Route path="/PigShow/:id" element={<PigShow pigs={pigs} deletePig={deletePig} />} />
        <Route path="/PigNew" element={<PigNew createPig={createPig} />} />
        <Route path="/PigEdit/:id" element={<PigEdit  updatePig={updatePig} pigs={pigs} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
  }

export default App;
