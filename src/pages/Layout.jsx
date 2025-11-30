import React from "react";
import Navbar from "./Navbar"; // your navbar component

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
