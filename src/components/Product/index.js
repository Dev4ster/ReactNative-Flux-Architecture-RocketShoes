import React from 'react';

import {
  ProductItem,
  Title,
  Price,
  ProductImage,
  ButtonAddCart,
  Count,
  TextButton,
  TextCount,
  IconCart,
} from './styles';

export default function Product({
  title,
  image,
  priceFormated,
  onAddCart,
  amount,
}) {
  return (
    <ProductItem>
      <ProductImage source={{uri: image}} />
      <Title numberOfLines={2}>{title}</Title>
      <Price> {priceFormated}</Price>
      <ButtonAddCart onPress={onAddCart}>
        <Count>
          <IconCart name="shopping-basket" />
          <TextCount>{amount || 0}</TextCount>
        </Count>
        <TextButton>ADICIONAR</TextButton>
      </ButtonAddCart>
    </ProductItem>
  );
}
