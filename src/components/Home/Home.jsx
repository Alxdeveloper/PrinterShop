import React from "react";
import styled from "styled-components";
import profile from '../../assets/images/profile.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection id="home" className="container flexSpaceCenter">
        <LeftSide className="flexCenter">
          <div>
            <h1 className="extraBold font60">We are Digital Designs Agency.</h1>
            <HeaderP className="font13 semiBold">
            At Impressive Style and Designs Limited, we take pride in offering innovative and creative print design and branding services that set your business apart. Based in Kenya, we specialize in delivering top-quality solutions that capture your brand’s essence and communicate it effectively to your audience. Whether you are a start-up or an established enterprise, our goal is to bring your brand to life through eye-catching designs and premium printing.
            </HeaderP>
            <BtnWrapper>
              <button className="btn btn-primary">Get Started</button>
            </BtnWrapper>

            {/* Motto Section */}
            <MottoSection>
              <h3 className="font30 semiBold">Our Motto</h3>
              <p className="font15">"We Design| Print| Deliver"</p>
            </MottoSection>

            {/* Vision Section */}
            <VisionSection>
              <h3 className="font30 semiBold">Our Vision</h3>
              <p className="font15">
                "To be the leading digital Designs provider, driving growth and success for businesses ."
              </p>
            </VisionSection>
          </div>
        </LeftSide>
        <RightSide>
          <Img className="radius8" src={profile} alt="office" height={450} style={{ zIndex: 9 }} />
        </RightSide>
      </HeroSection>
      {/* Services Section */}
      <ServicesSection className="container">
        <h2 className="extraBold font40 text-center">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <ServiceCard>
              <h3>Corporate Brands</h3>
              <p>Communicate value through branded business brands</p>
            </ServiceCard>
          </div>
          <div className="col-md-4">
            <ServiceCard>
              <h3>Business Banners</h3>
              <p>Visualize your Business in  a Banner</p>
            </ServiceCard>
          </div>
          <div className="col-md-4">
            <ServiceCard>
              <h3>Executive Business Cards</h3>
              <p>Equip your employees with branded business Cards.</p>
            </ServiceCard>
          </div>
        </div>
      </ServicesSection>

      {/* Testimonials Section */}
      <TestimonialsSection className="container">
        <h2 className="extraBold font40 text-center">What Our Clients Say</h2>
        <QuoteWrapper>
          <p className="font15 whiteColor">
            <em>“Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.”</em>
          </p>
          <p className="font13 orangeColor textRight" style={{ marginTop: '10px' }}>- Jacki</p>
        </QuoteWrapper>
      </TestimonialsSection>
    </div>
  );
};

export default Home;

/* Styled Components */
const HeroSection = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    text-align: center;
  }
`;

const RightSide = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
  }
`;

const HeaderP = styled.p`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    text-align: center;
    max-width: 100%;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 20px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

/* Motto Section */
const MottoSection = styled.div`
  margin-top: 40px;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 24px;
    color: green;
  }
`;

/* Vision Section */
const VisionSection = styled.div`
  margin-top: 20px;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 24px;
    color: green;
  }
`;

const Img = styled.img`
  width: 100%;
  @media (max-width: 560px) {
    width: 80%;
  }
`;

const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  background: #f5f5f5;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;

/* Services Section */
const ServicesSection = styled.section`
  padding: 0;
  text-align: center;
`;

const ServiceCard = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: #666;
  }
`;

/* Testimonials Section */
const TestimonialsSection = styled.section`
  padding: 60px 0;
  text-align: center;
  background: #333;
  color: white;
`;

const QuoteWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background-color: #444;
  border-radius: 10px;
`;

