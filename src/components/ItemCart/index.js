import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {
  Product,
  Image,
  Title,
  Price,
  ProductDetails,
  Actions,
  UpdateAmount,
  RemoveOne,
  Counter,
  AddOne,
  SubTotal,
} from './styles';

export default function ItemCart({title, image, priceFormated}) {
  return (
    <Product>
      <Image source={{uri: image}} />
      <ProductDetails>
        <Title>{title}</Title>
        <Price>{priceFormated}</Price>
      </ProductDetails>
      <Actions>
        <UpdateAmount>
          <TouchableOpacity>
            <RemoveOne name="remove-circle-outline" size={20} />
          </TouchableOpacity>

          <Counter
            keyboardType="numeric"
            textContentType="telephoneNumber"
            enablesReturnKeyAutomatically
            autoCorrect={false}
            value="3"
          />
          <TouchableOpacity>
            <AddOne name="add-circle-outline" size={20} />
          </TouchableOpacity>
        </UpdateAmount>
        <SubTotal>R$539,70</SubTotal>
      </Actions>
    </Product>
  );
}
