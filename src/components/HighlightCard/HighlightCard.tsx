import React from 'react';

import {
  Container,
  Header,
  Title,
  IconsCard,
  Footer,
  LastTransaction,
  Amount,
} from './styles';

interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};

export function HighlightComponent({
  title,
  amount,
  lastTransaction,
  type,
}: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <IconsCard name={icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
}
