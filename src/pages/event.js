import React from "react";
import Layout from "../components/Layout";
import Bok from "../../images/bok.jpg";
import Bardot from "../../images/bardot.jpg";
import { Link } from "gatsby";
export default () => (
  <Layout>
    <h1 className="text-center text-3xl my-4">Event Details</h1>
    <section className="p-8 text-center">
      <p>
        We are taking as many precautions as possible and following all state
        and city COVID-19 guidelines. We kindly ask that you do your part and
        please wear a mask whenever possible!
      </p>
    </section>
    <h2 className="text-center text-2xl my-4 font-bold">Ceremony</h2>
    <section className="flex flex-col md:flex-row mb-8 items-center">
      <img src={Bok} alt="Bok rooftop" className="md:w-1/2" />
      <section className="text-center md:w-1/2">
        <p className="text-xl text-center font-semibold py-4">1:30PM</p>
        <p className="text-xl font-semibold">Bok Bar</p>
        <p>800 Mifflin Street</p>
        <p>(8th &amp; Mifflin)</p>
        <Link
          className="text-green-700 underline"
          to="https://goo.gl/maps/Si8MDPwg2AbNCQHe7"
        >
          Google Maps
        </Link>
        <p className="m-4">
          Use the 9th St entrance. Head straight down the hallway, elevators
          will be on your right. Take the elevator to the top floor, the venue
          will be on your left as you exit.
        </p>
      </section>
    </section>

    <h2 className="text-center text-2xl my-4 font-bold">Reception</h2>
    <section className="flex mb-8 flex-col md:flex-row-reverse items-center">
      <img src={Bardot} alt="Bardot interior" className="md:w-1/2" />
      <section className="text-center md:w-1/2">
        <p className="text-xl text-center font-semibold py-4">
          Immediately Following Ceremony
        </p>
        <p className="text-xl font-semibold">The Bardot</p>
        <p>1645 S Broad Street</p>
        <p>(Broad &amp; Morris)</p>
        <p>
          <Link
            className="text-green-700 underline"
            to="https://goo.gl/maps/1FdEWdcxk1CVNisk7"
          >
            Google Maps
          </Link>
        </p>
        <p className="m-4">
          Please enter through the white door on Morris Street (next to the
          garage door). Stay in the outdoor area as much as possible and{" "}
          <strong>please wear a mask!</strong>
        </p>
      </section>
    </section>
  </Layout>
);
