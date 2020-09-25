import React from "react";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import "../css/index.css";
export default ({ children }) => (
  <div
    className="outer md:py-4"
    style={{
      backgroundColor: "#616f43",
    }}
  >
    <div className="lg:container lg:mx-auto px-4 pb-4 font-sans bg-white">
      <Header />
      <Navigation />
      <section className="my-8">{children}</section>
    </div>
  </div>
);
