import React from 'react';
import {HighlightComponent} from '../../components/HighlightCard/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard/TransactionCard';
import {
  UserName,
  Header,
  Greetings,
  UserInfo,
  UserPhoto,
  User,
  UserWrapper,
  Icons,
  Container,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Bolo de pote - Ninho com morango',
      amount: 'R$ 10.000,00',
      category: {
        name: 'Vendas',
        icon: 'dollar-sign',
      },
      date: '13/04/2021',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Bolo de pote - Ninho com Nutella',
      amount: 'R$ 52,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: '13/04/2021',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 2.000,00',
      category: {
        name: 'Casa',
        icon: 'shopping-bag',
      },
      date: '13/04/2021',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserPhoto
              source={{
                uri: 'https://avatars.githubusercontent.com/u/88354692?v=4',
              }}
            />
            <User>
              <Greetings>Hello,</Greetings>
              <UserName>King Denis</UserName>
            </User>
          </UserInfo>
          <Icons name="power-off" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightComponent
          type="up"
          title="Entradas"
          amount="R$: 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightComponent
          type="down"
          title="Saídas"
          amount="R$: 1.259,00"
          lastTransaction="Última entrada dia 03 de abril"
        />
        <HighlightComponent
          type="total"
          title="Total"
          amount="R$: 16.100,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Title</Title>
        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}

export default Dashboard;
