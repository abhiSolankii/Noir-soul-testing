import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";

function NavScrollExample() {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // Redirect to search results page
      window.location.href = `/SearchResults?search=${searchQuery}`;
    }
  };
  return (
    <Navbar expand="lg" className=" fixed-top bg-black text-white items-center">
      <Container fluid>
        <img src="/logo.png" alt="logo" className="w-12 p-1" />
        <Navbar.Brand href="/" className="text-white">
          NoirSoul
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="/Home"
              className="text-white hover:bg-yellow-600 rounded-md"
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/Music"
              className="text-white  hover:bg-yellow-600 rounded-md"
            >
              Music
            </Nav.Link>
            <Nav.Link
              href="/Artists"
              className="text-white  hover:bg-yellow-600 rounded-md"
            >
              Artists
            </Nav.Link>
            <Nav.Link
              href="/"
              className="text-white bg-red-600 hover:bg-red-500 rounded-xl ml-10"
            >
              Exit
            </Nav.Link>
            {/* <NavDropdown
              title="Features"
              id="navbarScrollingDropdown"
              className="text-white"
            >
              <NavDropdown.Item href="#action3">Artists</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search Music, Artists ..."
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

//
//
//
