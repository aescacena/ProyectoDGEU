import React from 'react';

interface IProductProps {
	name: string;
	model: string;
	sku: string;
	rating: string;
	numberOfReviews: string;
}

class Product extends React.Component<IProductProps, {}> {

	constructor(props: IProductProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f02" data-version="2.1.0">
							<link rel="stylesheet" href="https://mexico.bbystatic.com/@bbmx/bbmx/product-title/dist/client/client-ae8a69b1666a007a9e45c87aadbecdbb.css" />
							<div className="bbmx-product-title">
								<div className="appContainer" data-reactroot="">
									<div id="sku-title" itemProp="name">
										<h1 className="type-subhead-alt-regular">{ this.props.name }</h1>
									</div>
									<div id="sku-model">
										<ul>
											<li className="model-number"><span className="label">Modelo:</span><span id="model-value" itemProp="model">{ this.props.model }</span></li>
											<li className="sku-id"><span className="label">SKU:</span><span id="sku-value" itemProp="productID">{ this.props.sku }</span></li>
											<li tabIndex={0} role="menuitem" className="customer-rating" itemProp="aggregateRating" itemType="http://schema.org/AggregateRating">
												<div className="c-ratings-reviews v-small">
													<p className="sr-only"></p><span className="c-stars c-stars-small" aria-hidden="true"><span className="unfilled"></span><span className="filled" style={{ width: "98.00000000000001%" }}></span></span><span className="c-reviews"><span className="c-review-average" aria-hidden="true">{ this.props.rating }</span><span className="c-total-reviews" aria-hidden="true"> ({ this.props.numberOfReviews })</span></span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default Product;
