import styled, {css} from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

interface Types {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<Types>`
  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;
  border: solid 1px black;
  border-radius: 5px;
  margin: ${RFValue(20)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  background-color: ${({theme, type}) =>
    type === 'total' ? theme.colors.secondary : theme.colors.background};
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text<Types>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const IconsCard = styled(Icons)<Types>`
  font-size: ${RFValue(40)}px;

  ${({type}) =>
    type === 'up' &&
    css`
      color: ${({theme}) => theme.colors.success};
    `};

  ${({type}) =>
    type === 'down' &&
    css`
      color: ${({theme}) => theme.colors.attention};
    `};

  ${({type}) =>
    type === 'total' &&
    css`
      color: ${({theme}) => theme.colors.shape};
    `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<Types>`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  margin-top: 38px;

  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`;

export const LastTransaction = styled.Text<Types>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme, type}) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};
`;
