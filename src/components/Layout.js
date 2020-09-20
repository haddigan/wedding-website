import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import "../css/index.css";
export default ({ children }) => (
  <div className="lg:container lg:mx-auto px-4 font-sans">
    <Header />
    <Navigation />
    <section className="my-8">{children}</section>
  </div>
);
