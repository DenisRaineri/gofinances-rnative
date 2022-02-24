import React from 'react';
import {
  UserName,
  Header,
  Greetings,
  UserInfo,
  UserPhoto,
  User,
  UserWrapper,
  Icons,
} from './styles';

function Dashboard() {
  return (
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
  );
}

export default Dashboard;
