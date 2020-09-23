import React from "react";
import Eucalyptus from "../../images/eucalyptus-3.png";
import { Link } from "gatsby";

export default () => (
  <header className="flex flex-col pt-4">
    <p className="flex-1 text-center text-4xl">
      <Link
        to="/"
        className="transition duration-200 ease-in-out hover:text-green-700 text-gray-800"
      >
        Siobhan &amp; Dan
      </Link>
    </p>
    <img
      alt="Eucalyptus plant"
      className="flex-auto sm:w-2/12 w-1/4 self-center py-2"
      src={Eucalyptus}
    />
  </header>
);
