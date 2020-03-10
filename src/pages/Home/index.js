import React, {Component} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Product from '../../components/Product';
import * as cartActions from '../../store/modules/cart/actions';
// import ProductVisited from '../../components/ProductVisited';
import api from '../../services/api';
import {Container, ProductContainer} from './styles';

import formatPrice from '../../util/format';

class Home extends Component {
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

  handleAddProduct = product => {
    const {addToCart} = this.props;
    addToCart(product);
  };

  render() {
    const {products} = this.state;
    const {amount} = this.props;
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
                    this.handleAddProduct(item);
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
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
