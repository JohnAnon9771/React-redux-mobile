import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  position: absolute;
  width: 375px;
  height: 84px;
  left: 0px;
  top: 0px;

  background: #141419;
`;

export const Logo = styled.Image`
  position: absolute;
  width: 185px;
  height: 24px;
  left: 20px;
  top: 40px;
`;

export const Cart = styled.View`
  position: absolute;
  width: 24px;
  height: 26px;
  left: 321px;
  top: 38px;
`;

export const IconCart = styled(Icon)`
  color: #ffffff;
`;

export const Item = styled.Text`
  position: absolute;
  width: 16px;
  height: 16px;
  left: 334px;
  top: 34px;

  background: #7159c1;
`;
