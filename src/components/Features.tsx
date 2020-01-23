import React from 'react';

interface IFeaturesProps {
	features: string[];
}

class Features extends React.Component<IFeaturesProps, {}> {

	constructor(props: IFeaturesProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-86566779-2dcd-4542-b8fc-5d00f4192dbc" data-version="1.1.2-rc.1">
							<link rel="stylesheet" href="https://mexico.bbystatic.com/@gvpc/shop/product-features/dist/client/client-94b78be9e8e677e927b0a26d36781560.css" />
							<div className="shop-product-features">
								<div className="container-fluid" data-reactroot="">
									<div className="row">
										<div className="features-container lv" model-number="">
											<h2 className="heading-5 v-fw-regular">Características del producto</h2>
											<hr role="presentation" />
											<div className="features-list-container">
												<div className="features-list all-features">
													{this.props.features.map(function (element, index) {
														return <div className="list-row"><p className="body-copy-lg">{element}</p></div>
													})}
												</div>
											</div>
										</div>
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

export default Features;
