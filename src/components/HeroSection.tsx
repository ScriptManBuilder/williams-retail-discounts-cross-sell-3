import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.williamstravelperks.com';

  const handleLaunchApp = () => {
    // Temporarily disabled - demo site under construction
    // window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Unlock Exclusive Retail Savings</Tagline>
        <HeroTitle>
          Shop More. Save More.
          <Highlight>Get Premium Discounts Daily.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Transform every purchase into incredible savings with exclusive retail discounts and member-only benefits. 
          Get access to up to 70% off at thousands of top retailers, cashback rewards, exclusive deals, and VIP shopping 
          experiences that save you hundreds on every shopping trip.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            View Discounts →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Learn More
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
