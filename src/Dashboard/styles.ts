import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  /* background-color: ${props => props.theme.colors.primary}; */
  background-color: ${({theme}) => theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: 30px;
  font-family: ${({theme}) => theme.fonts.black};
  color: ${({theme}) => theme.colors.primary};
`;

export const Greetings = styled.Text`
  font-size: 24px;

  font-family: ${({theme}) => theme.fonts.bold_italic};

  color: ${({theme}) => theme.colors.success};
`;
