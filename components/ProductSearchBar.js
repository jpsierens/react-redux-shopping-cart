import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class ProductSearchBar extends Component {
	render() {
		const { onInputChange } = this.props;
		let input

		return (
			<div style={{'margin':'15px 0'}}>
				<input
					placeholder="Search a product..."
					ref={ node => {
						input = node
					}}
					onChange={ () => {
						onInputChange(input.value)
					}} />
			</div>
		)
	}
}

export default connect()(ProductSearchBar)