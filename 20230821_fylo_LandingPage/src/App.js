import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import features from "./data/features";
import testimonials from "./data/testimonials";

import { NavBar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Features } from "./Components/Features";
import { Works } from "./Components/Works";
import { Testimonials } from "./Components/Testimonials";
import { SignUp } from "./Components/SignUp";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features features={features} />
      <Works />
      <Testimonials testimonials={testimonials} />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
