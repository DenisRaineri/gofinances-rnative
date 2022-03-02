import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};

  width: ${RFValue(300)}px;
  height: ${RFValue(200)}px;
  border: solid 1px black;
  border-radius: 5px;
  margin: ${RFValue(20)}px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Icon = styled(Icons)`
  color: ${({theme}) => theme.colors.success};
  font-size: ${RFValue(40)}px;
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
  color: ${({theme}) => theme.colors.text_dark};
`;

export const LastTransaction = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text};
`;
