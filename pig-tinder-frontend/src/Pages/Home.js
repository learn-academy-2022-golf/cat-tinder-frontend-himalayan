import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
const Home = () => {

  return (
    <>
      <div style={{ fontSize: "20px", color: "blue", textAlign:"center"}}>
        Welcome To Guinea Pigs of the World
      </div>
     
      <img src="https://pariwana-hostel.com/media/filer_public_thumbnails/filer_public/e7/1e/e71e084e-c551-4f8c-8838-d6cf7fac41ca/exotic-peruvian-food-guinea-pig-pariwana-hostel-02.jpg__1170x0_q85_subsampling-2_upscale.jpg" style={{height:"auto", width:"100%", opacity:"90%"}} alt="Guinea Pig Pen"></img>
      {/* {guineaPigs.map((guineaPig, index) => {
        return(
        <div key={guineaPig.id} style={{ border: '1px solid black' }}></div>)})} */}
      
    </>
  );
};

export default Home;
