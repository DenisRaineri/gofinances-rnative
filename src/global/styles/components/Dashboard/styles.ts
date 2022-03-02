import Icon from 'react-native-vector-icons/FontAwesome';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;

  background-color: ${({theme}) => theme.colors.primary};

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.black};
  color: ${({theme}) => theme.colors.shape};
`;

export const Greetings = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
`;

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const UserPhoto = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  margin-top: -${RFValue(150)}px;
  padding: 0 24px;

  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Icons = styled(Icon)`
  font-size: ${RFValue(20)}px;
  font-weight: ${({theme}) => theme.fonts.light};
  color: ${({theme}) => theme.colors.secondary};
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: true,
  contentContainerStyle: {paddingHorizontal: 24},
})`
  margin-top: -${RFValue(160)}px;
`;
