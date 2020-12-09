import React from "react";
import AddToDo from "../AddToDo/AddToDo";
import Footer from "../Footer/Footer";
import VisibleToDo from "../VIsibleToDo/VisibleToDo";

const Home = () => {
  return (
    <div className="container">
      <AddToDo />
      <VisibleToDo />
      <Footer />
    </div>
  );
};

export default Home;
