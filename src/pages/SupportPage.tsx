import React, { useState } from 'react';
import {
  SupportContainer,
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImageWrapper,
  HeroImage,
  ContactInfo,
  PhoneNumber,
  PhoneIcon,
  AvailabilityText,
  ActionButtons,
  ActionButton,
  HelpSection,
  HelpTitle,
  HelpSubtitle,
  HelpGrid,
  HelpCard,
  HelpIcon,
  HelpCardTitle,
  HelpCardDescription,
  FAQSection,
  FAQSectionTitle,
  FAQSectionDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/SupportPage.styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I shop using my discount membership?',
      answer: 'Simply log into your member portal and browse our exclusive retail deals. You can access discounts at thousands of retailers, both online and in-store. Our shopping specialist team is also available to assist with finding the best deals and products.'
    },
    {
      question: 'What shopping benefits are included in my membership?',
      answer: 'Your membership includes exclusive discounts at major retailers (up to 70% off), cashback rewards up to 15%, free shipping on all orders, price match guarantees, and access to flash sales. You also get 24/7 shopping concierge service and member-only promotional events.'
    },
    {
      question: 'Can I use my benefits at both online and physical stores?',
      answer: 'Absolutely! Your retail discounts work at thousands of online merchants and brick-and-mortar stores nationwide. We partner with over 8,000 retailers across all categories, giving you access to incredible savings whether you shop online or in person.'
    },
    {
      question: 'How do I earn and redeem cashback rewards?',
      answer: 'You earn cashback on every purchase made through our platform or by linking your cards. Cashback is credited to your account within 48 hours and can be redeemed for statement credits, gift cards, or additional shopping discounts. Check your member dashboard for your current balance.'
    },
    {
      question: 'What if I need to return or exchange a purchase?',
      answer: 'Return policies vary by retailer. Most purchases can be returned according to the store\'s standard policy. Our support team is available 24/7 to assist with returns, exchanges, and resolving any shopping-related issues with retailers.'
    },
    {
      question: 'Is there a customer service line I can call anytime?',
      answer: 'Yes! Our shopping support team is available 24/7 at the number listed above. Whether you need help finding deals, have questions about your benefits, tracking orders, or need assistance with a purchase, we\'re always here to help.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const helpTopics = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Membership & Enrollment',
      description: 'Help with signing up and activating your retail discount membership'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      title: 'Shopping Assistance',
      description: 'Support with finding deals, product recommendations, and purchases'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      title: 'Cashback & Rewards',
      description: 'Questions about earning and redeeming your shopping cashback'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      ),
      title: 'Shopping Concierge',
      description: 'Personalized shopping assistance and best deal recommendations'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: 'Billing & Payments',
      description: 'Questions about membership fees, charges, and payment methods'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Returns & Exchanges',
      description: 'Information about return policies, refunds, and product exchanges'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = `mailto:${process.env.REACT_APP_EMAIL_SUPPORT}`;
  };

  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <Header />
      <SupportContainer>
        <SupportHero>
          <div>
            <HeroImageWrapper>
              <HeroImage src="/support_hero_1.jpg" alt="Customer Support" />
            </HeroImageWrapper>
            
            <HeroContent>
              <HeroTitle>Retail Discounts Customer Support</HeroTitle>
              <HeroDescription>Need help with your shopping benefits? We're here for you 24/7.</HeroDescription>
            
            <ContactInfo>
              <PhoneIcon>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </PhoneIcon>
              <div>
                <PhoneNumber>{process.env.REACT_APP_PHONE_DISPLAY}</PhoneNumber>
                <AvailabilityText>Available 24/7 - Call Anytime for Shopping Support</AvailabilityText>
              </div>
            </ContactInfo>
            
            <ActionButtons>
              {/* <ActionButton onClick={handleEmailClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Shopping Support
              </ActionButton> */}
              <ActionButton onClick={handleContactClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Contact Form
              </ActionButton>
              <ActionButton onClick={handleContactClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
                </svg>
                Member Support
              </ActionButton>
            </ActionButtons>
          </HeroContent>
          </div>
        </SupportHero>
        
        <HelpSection>
          <HelpTitle>How Can We Enhance Your Shopping Experience?</HelpTitle>
          <HelpSubtitle>Choose a topic below to get instant support from our expert shopping specialist team</HelpSubtitle>
          <HelpGrid>
            {helpTopics.map((topic, index) => (
              <HelpCard key={index} onClick={handleContactClick} style={{ cursor: 'pointer' }}>
                <HelpIcon>{topic.icon}</HelpIcon>
                <HelpCardTitle>{topic.title}</HelpCardTitle>
                <HelpCardDescription>{topic.description}</HelpCardDescription>
              </HelpCard>
            ))}
          </HelpGrid>
        </HelpSection>

        <FAQSection>
          <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
          <FAQSectionDescription>Quick answers to common shopping membership questions</FAQSectionDescription>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)} $isOpen={openFAQIndex === index}>
                  <span>{faq.question}</span>
                  <FAQIcon $isOpen={openFAQIndex === index}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </FAQIcon>
                </FAQQuestion>
                {openFAQIndex === index && (
                  <FAQAnswer>
                    {faq.answer}
                    <div style={{ marginTop: '1rem' }}>
                      <ActionButton 
                        onClick={handleContactClick} 
                        style={{ 
                          fontSize: '0.9rem', 
                          padding: '0.6rem 1.25rem',
                          display: 'inline-flex'
                        }}
                      >
                        Contact Shopping Support
                      </ActionButton>
                    </div>
                  </FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>
      </SupportContainer>
      <Footer />
    </>
  );
};

export default SupportPage;
