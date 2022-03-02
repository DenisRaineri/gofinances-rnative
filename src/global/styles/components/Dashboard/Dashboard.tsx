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
        <HighlightComponent />
        <HighlightComponent />
        <HighlightComponent />
        <HighlightComponent />
      </HighlightCards>
    </Container>
  );
}

export default Dashboard;
