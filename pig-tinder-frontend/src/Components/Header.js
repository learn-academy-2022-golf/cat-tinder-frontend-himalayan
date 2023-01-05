import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
function Header() {
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <NavLink to={`/PigIndex`} className="nav-link">
          <Button style={{ backgroundColor: "orange" }}>Show All Pigs</Button>
        </NavLink>
        <NavLink to={`/`} className="nav-link">
          <Button style={{ backgroundColor: "blue", textAlign: "center" }}>
            Home
          </Button>
        </NavLink>
        <NavLink to={`/PigNew`} className="nav-link">
          <Button style={{ backgroundColor: "purple", textAlign: "center" }}>
            Add to the mix
          </Button>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
