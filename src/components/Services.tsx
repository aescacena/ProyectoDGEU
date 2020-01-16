import React from 'react';

class Services extends React.Component<{}, {}> {

    public render() {
        return (
            <>
                <div className="widget-wrapper">
					<div data-reactroot="">
						<div className="productServicesContainer">
							<div>
								<h3 className="heading-5 v-fw-regular">Servicios</h3>
								<hr role="presentation" />
								<div className="services-list"><a href="https://www.bestbuy.com.mx/c/s180/s180" target="_blank" rel="noopener noreferrer">
										<div className="service-icon icon icon-geek-squad-logo"></div>
										<div className="service-message v-fw-medium">Protege tu compra con los Planes de Protección Tech Services</div>
									</a></div>
							</div>
						</div>
					</div>
				</div>
            </>
        );
    }

}

export default Services;
