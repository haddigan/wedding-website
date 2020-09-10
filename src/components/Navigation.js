import React from "react";
import { Link } from "gatsby";

export default () => (
  <nav className="border-b border-solid border-gray-300">
    <ul className="sm:flex px-8">
      <li className="flex-1 text-center px-4 sm:py-2 m-2 font-semibold">
        <Link
          className="transition duration-200 ease-in-out text-gray-800 hover:text-green-700"
          to="/"
        >
          Home
        </Link>
      </li>
      <li className="flex-1 text-center px-4 sm:py-2 m-2 font-semibold">
        <Link
          className="transition duration-200 ease-in-out text-gray-800 hover:text-green-700"
          to="/event"
        >
          Event Details
        </Link>
      </li>
      <li className="flex-1 text-center px-4 sm:py-2 m-2 font-semibold">
        <Link
          className="transition duration-200 ease-in-out text-gray-800 hover:text-green-700"
          to="https://www.zola.com/registry/siobhan-dan"
        >
          Registry
        </Link>
      </li>
    </ul>
  </nav>
);
