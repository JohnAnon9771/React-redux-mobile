import styled from 'styled-components/native';

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  height: 358px;
  top: 10px;
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  width: 220px;
  margin: 10px;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 180px;
  align-self: center;
`;

export const Button = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ButtonIcon = styled.View`
  display: flex;
  align-items: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ButtonText = styled.Text`
  line-height: 16px;
  height: 16px;
  left: 45%;
  right: 18%;
  font-weight: bold;
  color: #fff;
`;

export const ItemCart = styled.Text`
  margin: 0px 4px 0px 10px;
  color: #fff;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  line-height: 21px;
  height: 42px;
`;

export const ProductPrice = styled.Text`
  height: 25px;
  font-size: 21px;
  line-height: 25px;
`;
