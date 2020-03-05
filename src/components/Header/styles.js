import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  flex-direction: row;
  background: #141419;
`;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  padding-top: 35px;
  flex: 1;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const Cart = styled.View`
  flex-direction: row;
  align-items: center;
  height: 24px;
`;

export const IconCart = styled(Icon)`
  color: #ffffff;
`;

export const Item = styled.Text`
  position: absolute;
  text-align: center;
  left: 20px;
  top: -9px;
  color: #fff;
  width: 19px;
  border: 0px;
  border-radius: 50px;

  background: #7159c1;
`;
