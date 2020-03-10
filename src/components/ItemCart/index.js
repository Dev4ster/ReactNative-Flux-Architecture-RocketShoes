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
  Delete,
} from './styles';

export default function ItemCart({
  title,
  image,
  priceFormated,
  amount,
  subtotal,
  onDelete,
  onDecrement,
  onIncrement,
}) {
  return (
    <Product>
      <Image source={{uri: image}} />
      <ProductDetails>
        <Title>{title}</Title>
        <Price>{priceFormated}</Price>
      </ProductDetails>
      <TouchableOpacity onPress={onDelete}>
        <Delete name="delete-forever" size={22} />
      </TouchableOpacity>

      <Actions>
        <UpdateAmount>
          <TouchableOpacity onPress={onDecrement}>
            <RemoveOne name="remove-circle-outline" size={20} />
          </TouchableOpacity>

          <Counter
            keyboardType="numeric"
            textContentType="telephoneNumber"
            enablesReturnKeyAutomatically
            autoCorrect={false}
            value={String(amount)}
          />
          <TouchableOpacity onPress={onIncrement}>
            <AddOne name="add-circle-outline" size={20} />
          </TouchableOpacity>
        </UpdateAmount>
        <SubTotal>{subtotal}</SubTotal>
      </Actions>
    </Product>
  );
}
