import { Container, Row, Col } from "react-bootstrap";
import logo from "../aassets/img/logo.svg";
import navIcon1 from "../aassets/img/nav-icon1.svg";
import navIcon2 from "../aassets/img/nav-icon2.svg";
import navIcon3 from "../aassets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/taufan-alvariezi-3694362a9/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/taufanalvariezi?locale=id_ID"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.Instagram.com/Taufanalvrz_"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Taufan Alvariezi</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}