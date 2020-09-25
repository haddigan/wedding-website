import React from "react";

import Layout from "../components/Layout";
import Photo from "../../images/main.jpg";

export default () => (
  <Layout>
    <h1 className="font-medium text-center text-2xl">We're Getting Married!</h1>
    <h2 className="font-light text-center text-l">
      Saturday, September 26, 2020
    </h2>
    <p className="my-8 flex-1">
      <img
        src={Photo}
        alt="Dan and Siobhan (and Bert)"
        className="px-8 object-contain"
      />
    </p>
  </Layout>
);
