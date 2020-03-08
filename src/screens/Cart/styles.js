import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/AntDesign';
import Trash from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  display: flex;
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  margin: 15px;
`;

export const List = styled.FlatList.attrs({
  scrollVerticalIndicator: false,
})``;

export const Product = styled.View`
  margin: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
`;

export const PhotoProduct = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductInfo = styled.View`
  position: absolute;
  left: 29.51%;
  right: 17.05%;
  top: 7.69%;
  bottom: 46.15%;
`;

export const AmountInfo = styled.View`
  height: 40px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
`;

export const Amount = styled.Text`
  font-weight: bold;
  padding: 10px;
`;

export const Value = styled.TextInput`
  margin: 5px;
  width: 51px;
  height: 26px;
  text-align: center;
  color: #000;
  background: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 4px;
`;

export const Quantity = styled.View`
  margin-left: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Decrement = styled(Icon)``;

export const Increment = styled(Icon)``;

export const Remove = styled(Trash)`
  position: absolute;
  height: 24px;
  top: 28px;
  left: 92.13%;
`;

export const ValueAmount = styled.View`
  display: flex;
  margin: 25px;
  align-items: center;
`;

export const ValueText = styled.Text`
  font-weight: bold;
  color: #999;
  font-size: 16px;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  padding: 10px;
  font-size: 30px;
  letter-spacing: -1.5px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  background: #7159c1;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
