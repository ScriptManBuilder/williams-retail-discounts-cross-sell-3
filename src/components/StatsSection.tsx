import React from 'react';
import {
  StatsContainer,
  StatsContent,
  StatsSectionTitle,
  StatsSectionDescription,
  StatsGrid,
  StatCard,
  StatTitle,
  StatDescription,
  StatValue
} from '../styles/StatsSection.styles';

const StatsSection: React.FC = () => {
  const stats = [
    {
      title: 'Average Annual Savings',
      description: 'Members save thousands annually on everyday purchases with exclusive discounts and cashback rewards',
      value: '$2,800',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      title: 'Store Discount Rate',
      description: 'Access exclusive discounts at major retailers nationwide, dramatically below regular retail pricing',
      value: '70%',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      title: 'Member Satisfaction',
      description: 'Members rate their shopping experience as exceptional, with consistent 5-star reviews and recommendations',
      value: '98%',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    },
    {
      title: 'Partner Retailers',
      description: 'Access to discounts at thousands of top retail stores, brands, and online merchants nationwide',
      value: '8,000+',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
    }
  ];

  return (
    <StatsContainer id="stats">
      <StatsContent>
        <StatsSectionTitle>Shop Smart, Save Big on Every Purchase</StatsSectionTitle>
        <StatsSectionDescription>
          See how our exclusive retail discount program delivers extraordinary value and incredible savings.
        </StatsSectionDescription>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard key={index} $background={stat.background}>
              <StatTitle>{stat.title}</StatTitle>
              <StatDescription>{stat.description}</StatDescription>
              <StatValue>{stat.value}</StatValue>
            </StatCard>
          ))}
        </StatsGrid>
      </StatsContent>
    </StatsContainer>
  );
};

export default StatsSection;
