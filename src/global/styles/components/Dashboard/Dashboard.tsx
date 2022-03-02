import React from 'react';
import {HighlightComponent} from '../HighlightCard/HighlightCard';
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
} from './styles';

function Dashboard() {
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
    </Container>
  );
}

export default Dashboard;
