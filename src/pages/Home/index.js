import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Product from '../../components/Product';
import * as cartActions from '../../store/modules/cart/actions';
// import ProductVisited from '../../components/ProductVisited';
import api from '../../services/api';
import {Container, ProductContainer} from './styles';

import formatPrice from '../../util/format';

export default function Home() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const amount = useSelector(state =>
    state.cart.reduce((amountCount, product) => {
      amountCount[product.id] = product.amount;
      return amountCount;
    }, {})
  );

  useEffect(() => {
    async function getProducts() {
      const productsData = await api.get('/products/');
      const data = productsData.data.map(p => ({
        ...p,
        priceFormated: formatPrice(p.price),
      }));
      setProducts(data);
    }
    getProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(cartActions.addToCartRequest(id));
  }
  return (
    <Container>
      <ScrollView>
        <ProductContainer>
          <FlatList
            data={products}
            horizontal
            contentContainerStyle={{flexGrow: 1}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <Product
                title={item.title}
                image={item.image}
                amount={amount[item.id]}
                priceFormated={item.priceFormated}
                onAddCart={() => {
                  handleAddProduct(item.id);
                }}
              />
            )}
          />
        </ProductContainer>
        {/* <ProductVisitedContainer>
            <H1>Últimos Acessados</H1>
            <FlatList
              data={products}
              vertical
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <ProductVisited
                  title={item.title}
                  image={item.image}
                  priceFormated={item.priceFormated}
                />
              )}
            />
          </ProductVisitedContainer> */}
      </ScrollView>
    </Container>
  );
}
