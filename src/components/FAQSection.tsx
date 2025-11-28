import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What retail discounts and benefits are included?',
      answer: 'Members enjoy discounts up to 70% at thousands of retailers, cashback rewards up to 15%, exclusive flash sales, price match guarantees, free shipping on all orders, priority customer service, and 24/7 shopping concierge support.'
    },
    {
      question: 'How do I start using my retail discounts?',
      answer: 'Simply enroll and receive instant access to our member portal. Browse available retailers and deals, click through to shop, and your exclusive discounts are automatically applied at checkout. Cashback is credited to your account within 48 hours.'
    },
    {
      question: 'Are there any restrictions or limitations?',
      answer: 'Most retailers have year-round availability with minimal restrictions. Some exclusions may apply during major sale events, but you\'ll always see current offers and terms when browsing. No hidden fees or surprise limitations.'
    },
    {
      question: 'Can I share my membership benefits?',
      answer: 'Membership benefits are for individual use, but you can purchase products for family and friends using your membership discounts. You\'ll earn cashback on all purchases made through your account.'
    },
    {
      question: 'What stores and retailers are available?',
      answer: 'We partner with over 8,000 retailers nationwide including major department stores, fashion brands, electronics retailers, home goods stores, online merchants, and specialty shops across all categories.'
    },
    {
      question: 'How much can I realistically save?',
      answer: 'Members typically save $2,000-$4,000 annually depending on shopping frequency. Regular shoppers save $200-$400 per month on everyday purchases. Combined with cashback rewards, the membership pays for itself within the first month.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our exclusive retail discount program
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
