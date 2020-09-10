import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";

export default ({ children }) => (
  <div className="lg:container lg:mx-auto px-4">
    <Header />
    <Navigation />
    {children}
  </div>
);
