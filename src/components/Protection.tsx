import React from 'react';

interface IProtectionProps {
	warrantyDuration: string;
	warrantyPrice: string;
}

class Protection extends React.Component<IProtectionProps, {}> {

	constructor(props: IProtectionProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f09" data-version="2.0.0">
							<link rel="stylesheet" href="https://mexico.bbystatic.com/@bbmx/bbmx/warranty-tiles/dist/client/client-b4f5dec176ef5c7e21e3cd72fc8965cf.css" />
							<div className="bbmx-warranty-tiles">
								<div className="warranty-tiles-container" data-reactroot="">
									<div className="warranty-tiles-service-link-section"><i className="protection-logo icon-geek-squad-logo"></i>
										<div className="warranty-tiles-service-link-content">
											<h3>Protege tu compra con:</h3>
											<p>Nuestros planes de protección</p>
											<p><a href="https://www.bestbuy.com.mx/c/s180/s180" target="_blank">Detalles de los planes</a></p>
										</div>
									</div>
									<div className="warranties-tiles">
										<fieldset className="warranty-tile-group">
											<div className="warranty-tile-group-title">
												<h3>Plan de Protección contra Robo y Daño Accidental<a className="warranty-tile-group-title-info" href="javascript:void(0);"><i className="ficon-info"></i></a></h3>
											</div><label title="1 Año Plan Contra Robo y Accidentes Geek Squad" htmlFor="warranty-tile-type-I-1000197427"><input type="radio" id="warranty-tile-type-I-1000197427" name="warranty-tile-type-I" value="1000197427" />
												<div className="warranty-tile"><span className="warranty-duration">{this.props.warrantyDuration}</span><span className="warranty-price">{this.props.warrantyPrice}</span><i className="ficon-triangle"></i></div>
											</label><label htmlFor="warranty-tile-type-I-none"><input type="radio" id="warranty-tile-type-I-none" name="warranty-tile-type-I" value="0" defaultChecked />
												<div className="warranty-tile warranty-tile-no-thanks"><span>No, gracias</span><i className="ficon-triangle"></i></div>
											</label>
										</fieldset>
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

export default Protection;
