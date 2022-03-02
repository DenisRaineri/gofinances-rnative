import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icons,
  CategoryName,
  Date,
} from './styles';

interface Category {
  key: string;
  name: string;
  icon: string;
}

interface Data {
  title: string;
  amount: string;
  category: Category;
  date: string;
}

interface Props {
  data: Data;
}

export function TransactionCard({data}: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>
        <Category>
          <Icons name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
