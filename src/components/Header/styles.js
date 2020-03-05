import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex-direction: row;
  height: 84px;
  left: 0px;
  top: 0px;

  background: #141419;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
  left: 20px;
  top: 40px;
`;

export const Cart = styled.View`
  justify-content: flex-end;
  margin-left: 120px;
  bottom: 14.5px;
`;

export const IconCart = styled(Icon)`
  color: #ffffff;
`;

export const Item = styled.Text`
  position: absolute;
  text-align: center;
  width: 20px;
  bottom: 18px;
  margin-left: 20px;
  color: #fff;
  border: 0px;
  border-radius: 50px;

  background: #7159c1;
`;
