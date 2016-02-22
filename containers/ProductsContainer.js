import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { filterProducts } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductSearchBar from '../components/ProductSearchBar'

class ProductsContainer extends Component {
  render() {
    const { products } = this.props
    return (
      <div>
        <ProductSearchBar onInputChange={this.props.filterProducts} />
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => this.props.addToCart(product.id)} />
        )}
      </div>
    )
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    products: getVisibleProducts(state.products)
  }
}

export default connect(
  mapStateToProps,
  {addToCart, filterProducts}
)(ProductsContainer)
