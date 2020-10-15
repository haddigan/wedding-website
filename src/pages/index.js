import React from "react";

import Layout from "../components/Layout";

export default () => (
  <Layout>
    <h1 className="font-medium text-center text-2xl">We Got Married!</h1>
    <h2 className="font-light text-center text-l">
      Saturday, September 26, 2020
    </h2>
    <p className="my-8 flex-1 ">
      <iframe
        width={640}
        height={320}
        style={{ width: "100%" }}
        src={`https://player.vimeo.com/video/468614617?byline=0&portrait=0`}
        title="Dan &amp; Siobhan's Wedding"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </p>
  </Layout>
);
