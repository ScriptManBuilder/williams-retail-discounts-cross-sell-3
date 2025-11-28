import React, { useState } from 'react';
import {
  ContactContainer,
  ContactContent,
  ContactGrid,
  ContactForm,
  ContactInfo,
  ContactTitle,
  ContactDescription,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  InfoCard,
  InfoTitle,
  InfoDescription,
  InfoLink
} from '../styles/ContactSection.styles';

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      title: 'Exclusive Access',
      description: 'Get VIP access to flash sales, member-only discounts, and exclusive deals not available to the general public with special pricing.'
    },
    {
      title: 'Personalized Service',
      description: 'Work with dedicated shopping specialists who understand your preferences and help you find the best deals for every purchase.'
    },
    {
      title: 'Instant Savings',
      description: 'Start saving immediately with up to 70% off at major retailers and cashback rewards on your very first purchase.'
    }
  ];

  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactTitle>Start Your Retail Savings Journey</ContactTitle>
        <ContactDescription>
          Get in touch to learn how you can access exclusive retail discounts and start saving on your next purchase.
        </ContactDescription>
        
        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <h3>Contact Us</h3>
            {showSuccess && (
              <div style={{ 
                padding: '1rem', 
                backgroundColor: '#10b981', 
                color: 'white', 
                borderRadius: '8px',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            <p>Fill out the form below to learn more about exclusive retail discounts.</p>
            
            {/* Hidden field with your Web3Forms access key */}
            <input type="hidden" name="access_key" value={process.env.REACT_APP_WEB3FORMS_KEY} />
            
            <FormGroup>
              <FormLabel>Name</FormLabel>
              <FormInput 
                type="text" 
                name="name"
                placeholder="Your name" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput 
                type="email" 
                name="email"
                placeholder="your.email@company.com" 
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message"
                placeholder="Tell us about your shopping preferences and favorite stores..." 
                rows={5}
                required 
                disabled={isSubmitting}
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            {features.map((feature, index) => (
              <InfoCard key={index}>
                <InfoTitle>{feature.title}</InfoTitle>
                <InfoDescription>{feature.description}</InfoDescription>
              </InfoCard>
            ))}
            
            <InfoCard style={{ marginTop: '2rem' }}>
              <InfoDescription>
                Or reach us directly at <span style={{ fontWeight: 600, userSelect: 'none', pointerEvents: 'none' }}>{process.env.REACT_APP_EMAIL_SUPPORT}</span>
                <br />
                <br />
                or call {' '}
                <InfoLink href={`tel:${process.env.REACT_APP_PHONE_NUMBER?.replace(/\s+/g, '')}`}>
                  {process.env.REACT_APP_PHONE_DISPLAY}
                </InfoLink>
              </InfoDescription>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactSection;