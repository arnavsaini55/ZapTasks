import React from "react";
import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/Tasklist/TaskList"; // ✅ fixed casing

const Home = () => {
  return (
    <>
      <TaskInput />
      <TaskList/> 
      </> 
  );
};

export default Home;
