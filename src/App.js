import React from "react";
import Layout from "./Layout/Layout";
import Hero from "./Sections/Hero";
import Courses from "./Sections/Courses";

const App = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Courses />
      </Layout>
    </div>
  );
};

export default App;
