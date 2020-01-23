import React from 'react';

interface IShippingProps {
	shippingPrice: string;
	shippingDescription: string;
	pickUpPrice: string;
	pickUpDescription: string;
}

class Shipping extends React.Component<IShippingProps, {}> {

	constructor(props: IShippingProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="fulfillment-options">
							<div className="sku-block">
								<div>
									<div className="ficon-shipping icon-holder"></div>
									<div className="content-holder"><span className="ff-description"><span className="ff-label">Envío <em>{this.props.shippingPrice}</em></span></span>
										<div><span className="ff-method-text">{this.props.shippingDescription}</span></div>
									</div>
								</div>
								<div>
									<div className="ficon-store-pickup icon-holder"></div>
									<div className="content-holder"><span className="ff-description"><span className="ff-label">Recoge en Tienda <em>{this.props.pickUpPrice}</em></span></span>
										<div><span className="ff-method-text">{this.props.pickUpDescription}</span></div>
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

export default Shipping;
