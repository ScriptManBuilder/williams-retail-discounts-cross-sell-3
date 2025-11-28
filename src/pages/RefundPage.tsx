import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  LegalPageContainer,
  LegalHeroSection,
  LegalTitle,
  LegalContent,
  LegalSection,
  LegalSectionTitle,
  LegalParagraph,
  LegalList,
  LegalListItem
} from '../styles/LegalPages.styles';

const RefundPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Refund Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Our Commitment to Customer Satisfaction</LegalSectionTitle>
            <LegalParagraph>
              At {process.env.REACT_APP_COMPANY_NAME}, we are committed to providing high-quality retail discount membership services. 
              This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting a refund.
            </LegalParagraph>
            <LegalParagraph>
              By using our services, you acknowledge that you have read and understood this Refund Policy and agree to be bound by its terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Membership Subscriptions</LegalSectionTitle>
            <LegalParagraph>
              For membership subscription fees, the following refund terms apply:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Free Trial Period:</strong> If you cancel during your free trial period, no charges will be applied. 
                You must cancel before the trial ends to avoid being charged.
              </LegalListItem>
              <LegalListItem>
                <strong>Monthly Subscriptions:</strong> Monthly subscription fees are non-refundable once paid. You may cancel 
                your subscription at any time, and cancellation will take effect at the end of your current billing period.
              </LegalListItem>
              <LegalListItem>
                <strong>Annual Subscriptions:</strong> Annual subscription fees may be eligible for a prorated refund if canceled 
                within the first 30 days. After 30 days, annual fees are non-refundable.
              </LegalListItem>
              <LegalListItem>
                <strong>Mid-Cycle Cancellations:</strong> If you cancel mid-cycle, you will retain access to the service until 
                the end of your current billing period. No refunds are provided for unused time.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Purchases and Orders</LegalSectionTitle>
            <LegalParagraph>
              For purchases made through our platform:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Online Orders:</strong> Refund eligibility depends on the specific retailer's return policy. 
                Most items can be returned within 30-60 days of delivery for a full refund.
              </LegalListItem>
              <LegalListItem>
                <strong>In-Store Purchases:</strong> Physical purchases are subject to the store's return and exchange policies. 
                Some items may be final sale depending on the product category.
              </LegalListItem>
              <LegalListItem>
                <strong>Special Offers:</strong> Flash deal purchases have varying return policies depending on the offer terms. 
                Partial refunds may be available based on the return timing.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Eligible Refund Scenarios</LegalSectionTitle>
            <LegalParagraph>
              Refunds may be considered in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Platform Outage:</strong> If our shopping platform is unavailable for more than 48 consecutive hours due to 
                technical issues on our end, you may be eligible for a prorated membership credit or refund.
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Errors:</strong> If you were charged incorrectly due to a system error, we will refund the 
                incorrect amount immediately upon verification.
              </LegalListItem>
              <LegalListItem>
                <strong>Duplicate Charges:</strong> If you were accidentally charged twice for the same service, we will 
                refund the duplicate charge.
              </LegalListItem>
              <LegalListItem>
                <strong>Unauthorized Charges:</strong> If you can demonstrate that charges were made without your authorization, 
                we will investigate and issue a refund if warranted.
              </LegalListItem>
              <LegalListItem>
                <strong>Order Not Fulfilled:</strong> If you paid for an order that was never confirmed or delivered due 
                to our fault, you are eligible for a full refund.
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Non-Refundable Items and Services</LegalSectionTitle>
            <LegalParagraph>
              The following are not eligible for refunds under any circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Completed purchases and confirmed orders that have been received</LegalListItem>
              <LegalListItem>Concierge services that have been delivered</LegalListItem>
              <LegalListItem>Shopping consultations that have been completed</LegalListItem>
              <LegalListItem>Access to member-only deals, historical order data, or purchase reports</LegalListItem>
              <LegalListItem>Third-party fees (restocking fees, retailer return penalties, etc.)</LegalListItem>
              <LegalListItem>Memberships terminated due to violation of our Terms of Service</LegalListItem>
              <LegalListItem>Membership fees for periods already consumed</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Request a Refund</LegalSectionTitle>
            <LegalParagraph>
              To request a refund, please follow these steps:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Support:</strong> Email us at {process.env.REACT_APP_EMAIL_SUPPORT} or call 
                {process.env.REACT_APP_PHONE_DISPLAY} with your refund request
              </LegalListItem>
              <LegalListItem>
                <strong>Provide Information:</strong> Include your account email, order confirmation number or membership ID, 
                reason for refund request, and any supporting documentation
              </LegalListItem>
              <LegalListItem>
                <strong>Review Process:</strong> Our team will review your request within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Decision Notification:</strong> You will receive an email with our decision and next steps
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Processing:</strong> If approved, refunds are processed within 10-14 business days to 
                your original payment method
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Processing Time</LegalSectionTitle>
            <LegalParagraph>
              Once a refund is approved:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit/Debit Cards:</strong> 5-10 business days (may vary by bank)</LegalListItem>
              <LegalListItem><strong>PayPal:</strong> 3-5 business days</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> 7-14 business days</LegalListItem>
              <LegalListItem><strong>Other Payment Methods:</strong> Up to 14 business days</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Processing times may be longer depending on your financial institution. We are not responsible for delays 
              caused by banks or payment processors.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Credits</LegalSectionTitle>
            <LegalParagraph>
              In some cases, we may offer service credits as an alternative to refunds:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Service credits can be applied to future subscription periods or services</LegalListItem>
              <LegalListItem>Credits are valid for 12 months from the date of issuance</LegalListItem>
              <LegalListItem>Credits are non-transferable and cannot be redeemed for cash</LegalListItem>
              <LegalListItem>Unused credits expire and cannot be refunded</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Chargebacks and Disputes</LegalSectionTitle>
            <LegalParagraph>
              If you initiate a chargeback or payment dispute with your bank or payment provider:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>We encourage you to contact us first to resolve the issue directly</LegalListItem>
              <LegalListItem>Chargebacks may result in immediate suspension or termination of your account</LegalListItem>
              <LegalListItem>We reserve the right to dispute illegitimate chargebacks</LegalListItem>
              <LegalListItem>You may be liable for chargeback fees and legal costs if the chargeback is found to be fraudulent</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Membership Cancellation Policy</LegalSectionTitle>
            <LegalParagraph>
              You may cancel your membership at any time:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Cancellations can be processed through your account dashboard or by contacting support</LegalListItem>
              <LegalListItem>Cancellations take effect at the end of your current billing period</LegalListItem>
              <LegalListItem>You will continue to have access to membership benefits until the end of the paid period</LegalListItem>
              <LegalListItem>No refunds are provided for the remainder of the current billing period</LegalListItem>
              <LegalListItem>After cancellation, your data will be retained according to our Privacy Policy</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Force Majeure</LegalSectionTitle>
            <LegalParagraph>
              We are not liable for refunds or service disruptions caused by circumstances beyond our reasonable control, including:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Natural disasters, pandemics, or acts of God</LegalListItem>
              <LegalListItem>Government actions, regulations, or restrictions</LegalListItem>
              <LegalListItem>Internet service provider failures or network outages</LegalListItem>
              <LegalListItem>Third-party service disruptions (retailers, payment processors, shipping providers)</LegalListItem>
              <LegalListItem>Cyberattacks, security breaches, or malicious activities by third parties</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Policy</LegalSectionTitle>
            <LegalParagraph>
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon 
              posting to our website. Your continued use of our services after any changes constitutes acceptance of the 
              updated policy. Material changes will be communicated via email to registered users.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For refund requests or questions about this policy, please contact:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#5a6c7d' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </LegalParagraph>
          </LegalSection>
        </LegalContent>
      </LegalPageContainer>
      <Footer />
    </>
  );
};

export default RefundPage;
