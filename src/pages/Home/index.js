import React, {Component} from 'react';
import {FlatList, ScrollView} from 'react-native';
import Product from '../../components/Product';
// import ProductVisited from '../../components/ProductVisited';
import api from '../../services/api';
import {Container, ProductContainer} from './styles';

import formatPrice from '../../util/format';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const products = await api.get('/products/');
    const data = products.data.map(p => ({
      ...p,
      priceFormated: formatPrice(p.price),
    }));
    this.setState({
      products: [...data],
    });
  }

  render() {
    const {products} = this.state;
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
                  priceFormated={item.priceFormated}
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
}
