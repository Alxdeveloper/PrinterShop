import React from "react";
import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import hood from '../assets/images/hood.jpg';
import reflector from '../assets/images/reflectors.jpg';
import shirts from '../assets/images/shirts.jpg';
import tags from '../assets/images/tags.jpg';
import umbrela from '../assets/images/umbrela.jpg';

const services = [
  {
    id: 1,
    title: "hood",
    image: hood,
    description: "Making modern Hoods for business.",
  },
  {
    id: 2,
    title: "Reflecors",
    image: reflector,
    description: "Reflect your business to the world",
  },
  {
    id: 3,
    title: "Corporate Shirts",
    image: shirts,
    description: "Present your business through employees",
  },
  {
    id: 4,
    title: "Tags",
    image: tags,
    description: "Identify the staff to the world",
  },
  {
    id: 4,
    title: "Umbrelas",
    image: umbrela,
    description: "Show presence in CSR to the community",
  },
];

const OurServices = () => {
  const handleAddToCart = (service) => {
    console.log(`${service.title} added to cart.`);
  };

  const handleViewCart = () => {
    console.log("View cart clicked.");
  };

  return (
    <ServicesWrapper>
      <h2>Our Services</h2>
      <CardContainer className="row">
        {services.map((service) => (
          <ServiceCard className="col-md-3" key={service.id}>
            <img src={service.image} alt={service.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{service.title}</h5>
              <p className="card-text">{service.description}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(service)}
              >
                <FaCartPlus /> Add to Cart
              </button>
            </div>
          </ServiceCard>
        ))}
      </CardContainer>
      <ViewCartButton className="btn btn-secondary" onClick={handleViewCart}>
        View Cart
      </ViewCartButton>
    </ServicesWrapper>
  );
};

export default OurServices;

// Styled Components
const ServicesWrapper = styled.div`
  padding: 60px 0;
  text-align: center;
  h2 {
    margin-bottom: 40px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ServiceCard = styled.div`
  margin: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const ViewCartButton = styled.button`
  margin-top: 20px;
`;
