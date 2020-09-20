import React from "react";
import Layout from "../components/Layout";
import Bok from "../../images/bok.jpg";
import Bardot from "../../images/bardot.jpg";
import Eucalyptus from "../../images/eucalyptus-3.png";
export default () => (
  <Layout>
    <h1 className="text-center text-3xl my-4">Event Details</h1>
    <h2 className="text-center text-2xl my-4 font-bold">Ceremony</h2>
    <section className="flex mb-8 items-center">
      <img src={Bok} alt="Bok rooftop" className="w-1/2" />
      <section className="text-center w-1/2">
        <p className="text-xl text-center font-semibold pb-4">1:30PM</p>
        <p className="text-xl font-semibold">Bok Bar</p>
        <p>1909 S 9th Street</p>
        <p>(9th &amp; Mifflin)</p>
      </section>
    </section>

    <h2 className="text-center text-2xl my-4 font-bold">Reception</h2>
    <section className="flex mb-8 flex-row-reverse items-center">
      <img src={Bardot} alt="Bardot interior" className="w-1/2" />
      <section className="text-center w-1/2">
        <p className="text-xl text-center font-semibold pb-4">
          Immediately Following Ceremony
        </p>
        <p className="text-xl font-semibold">The Bardot</p>
        {/* <p>1909 S 9th Street</p> */}
        <p>(Broad &amp; Morris)</p>
      </section>
    </section>
  </Layout>
);
