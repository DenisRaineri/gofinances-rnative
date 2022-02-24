import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};

  width: ${RFValue(300)}px;
  border-radius: 5px;

  padding: 19px 23px;
`;

export const Header = styled.View``;

export const Title = styled.Text``;

export const Icon = styled(Icon)``;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransaction = styled.Text``;
