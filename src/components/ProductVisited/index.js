import React from 'react';
import {TouchableOpacity} from 'react-native';

import {VisitedItem, Image, Details, Title, Price} from './styles';

export default function ProductVisited({title, image, priceFormated}) {
  return (
    <TouchableOpacity delayPressIn={200}>
      <VisitedItem>
        <Image source={{uri: image}} />
        <Details>
          <Title numberOfLines={1}>{title}</Title>
          <Price>{priceFormated}</Price>
        </Details>
      </VisitedItem>
    </TouchableOpacity>
  );
}
