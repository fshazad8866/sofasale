"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Navbar, Nav } from "react-bootstrap";
import Image from "next/image";

const Header = ({ data, whatsppLink }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");

  const handleNavigation = (e, id) => {
    e.preventDefault();
    setActiveSection(id);

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/?scrollTo=${id}`);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToId = urlParams.get("scrollTo");

    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(scrollToId);
      }
    }
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      collapseOnSelect
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Navbar.Brand href="/" className="d-flex align-items-center me-auto">
          <h1 className="sitename">{data?.logo_name}</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link
              href="/"
              className={`${
                pathname === "/" && !activeSection ? "active-link" : ""
              } nav-item-custom me-3`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => handleNavigation(e, "contact")}
              className={`${
                activeSection === "contact" ? "active-link" : ""
              } nav-item-custom me-3`}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="/allproducts"
              className={`${
                pathname === "/allproducts" ? "active-link" : ""
              } nav-item-custom me-3`}
            >
              Products
            </Nav.Link>
            <Nav.Link
              href="#best"
              onClick={(e) => handleNavigation(e, "best")}
              className={`${
                activeSection === "best" ? "active-link" : ""
              } nav-item-custom me-3`}
            >
              Best Selling
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <a
          href={whatsppLink}
          className="whatsapp-widget"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/img/whatsapp.png"
            width={50}
            height={50}
            alt="WhatsApp"
          />
        </a>
      </div>
    </Navbar>
  );
};

export default Header;
