import React from 'react';

class Shipping extends React.Component<{}, {}> {

    public render() {
        return (
            <>
                <div className="widget-wrapper">
					<div data-reactroot="">
						<div id="fulfillment-options">
							<div className="sku-block">
								<div>
									<div className="ficon-shipping icon-holder"></div>
									<div className="content-holder"><span className="ff-description"><span className="ff-label">Envío <em>GRATIS</em></span></span>
										<div><span className="ff-method-text">En tus compras por internet</span></div>
									</div>
								</div>
								<div>
									<div className="ficon-store-pickup icon-holder"></div>
									<div className="content-holder"><span className="ff-description"><span className="ff-label">Recoge en Tienda <em>GRATIS</em></span></span>
										<div><span className="ff-method-text">Compra en línea y recoge gratis en tienda</span></div>
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
