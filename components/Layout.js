import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <header>
        <Navbar
          bg="white"
          expand="lg"
          sticky={"top"}
          style={{ borderBottom: "1px solid #ececec" }}
        >
          <Container>
            <Link className="navbar-brand" href={"/"}>
              Title
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto ms-4">
                <Link
                  className={`nav-link ${
                    router.pathname === "/" ? "active" : ""
                  }`}
                  href={"/"}
                >
                  Home
                </Link>
                <NavDropdown
                  title="Services"
                  active={router.pathname === "/services"}
                >
                  <NavDropdown.Item as={"div"} className={"m-0"}>
                    <Link className={"d-inline-block w-100"} href={"/services"}>
                      Service 1
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={"div"} className={"m-0"}>
                    <Link className={"d-inline-block w-100"} href={"/services"}>
                      Service 2
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={"div"} className={"m-0"}>
                    <Link className={"d-inline-block w-100"} href={"/services"}>
                      Service 3
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={"div"} className={"m-0"}>
                    <Link className={"d-inline-block w-100"} href={"/services"}>
                      Service 4
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  className={`nav-link ${
                    router.pathname === "/about" ? "active" : ""
                  }`}
                  href={"/about"}
                >
                  About Us
                </Link>
                <Link
                  className={`nav-link ${
                    router.pathname === "/contact" ? "active" : ""
                  }`}
                  href={"/contact"}
                >
                  Contact Us
                </Link>
              </Nav>
              <Button>Get Quote!</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section>{children}</section>
    </>
  );
}

export default Layout;
