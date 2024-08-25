"use client";
// import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export function Footer1() {
  return (
    <Footer container className="FooterCopyright">
      <Footer.Copyright by="Feras Salloum™" year={2024} />
      <Footer.LinkGroup className="FooterLinkGroup">
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
      </Footer.LinkGroup>
    </Footer>
  );
}
