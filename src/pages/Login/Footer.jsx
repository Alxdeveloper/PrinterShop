import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Footer = () => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your own Service ID, Template ID, and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <FooterWrapper>
      <FooterContainer className="container">
        <Row className="row">
          <Column className="col-md-4">
            <h3>About Us</h3>
            <p>
              We are a digital agency focused on delivering high-quality solutions to our clients. Our team is dedicated to excellence and innovation.
            </p>
          </Column>
          <Column className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Column>
          <Column className="col-md-4">
            <h3>Follow Us</h3>
            <IconWrapper>
              <FaFacebookF className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
            </IconWrapper>
          </Column>
        </Row>

        <ContactSection>
          <h2>Get In Touch</h2>
          <p>
            Please fill out the form below to send us an email and we will
            get back to you as soon as possible.
          </p>
          <form name="sentMessage" onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control form-control-sm"
                    placeholder="Name"
                    required
                    onChange={handleChange}
                  />
                  <br></br>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control form-control-sm"
                    placeholder="Email"
                    required
                    onChange={handleChange}
                  />
                  <br></br>
                </div>
              </div>
            </div>
            <div >
              <textarea
                name="message"
                id="message"
                className="form-control form-control-sm"
                rows="3"
                placeholder="Message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success btn-sm">
              Send Message
            </button>
          </form>
        </ContactSection>

        <ContactInfo>
          <h3>Contact Info</h3>
          <p>
            <span><i className="fa fa-map-marker"></i> Address: </span>
            112-60103 Embu
          </p>
          <p>
            <span><i className="fa fa-phone"></i> Phone: </span>
            0701152721
          </p>
          <p>
            <span><i className="fa-regular fa-envelope"></i> Email: </span>
            dmurangiri92@gmail.com
          </p>
        </ContactInfo>

        <CopyRight>
          <p>© 2024 J~DESIGNS. All Rights Reserved.</p>
        </CopyRight>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;

/* Styled Components for Footer */
const FooterWrapper = styled.footer`
  background-color: #222;
  color: white;
  padding: 40px 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #ccc;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  a {
    color: #ccc;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;

const IconWrapper = styled.div`
  margin-top: 20px;
  .social-icon {
    font-size: 24px;
    margin: 0 10px;
    cursor: pointer;
    color: white;
    &:hover {
      color: #f39c12;
    }
  }
`;

const ContactSection = styled.div`
  margin-top: 40px;
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    color: #ccc;
  }
`;

const ContactInfo = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  p {
    color: #ccc;
  }
`;

const CopyRight = styled.div`
  border-top: 1px solid #444;
  padding-top: 20px;
  p {
    font-size: 14px;
    color: #ccc;
  }
`;
