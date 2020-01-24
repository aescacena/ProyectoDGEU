import React from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';

interface IFinancingProps {
	numberOfMonths: string;
	monthlyPayment: string;
	fullPayment: string;
	paymentMethodsModalTitle: string;
	paymentMethodsNames: string[];
	paymentMethodsLogos: string[];
	paymentMethodsMonths: string[];
}

interface IFinancingState {
	showModal: boolean;
}

class Financing extends React.Component<IFinancingProps, IFinancingState> {

	constructor(props: IFinancingProps) {
		super(props);
		this.state = { showModal: false }
	}

	public render() {

		const handleClose = () => this.setState({ showModal: false });
		const handleShow = () => this.setState({ showModal: true });

		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f12" data-version="3.0.0">
							<link rel="stylesheet" href="https://mexico.bbystatic.com/@bbmx/bbmx/financing-offers/dist/client/client-26f62b3e0a76cb2d8c89e17be5f0af46.css" />
							<div className="bbmx-financing-offers">
								<div className="financingOffersContainer" data-reactroot="" data-reactid="1" data-react-checksum="521373880">
									<div className="financingOffersComponent" data-reactid="2">
										<p className="type-paragraph-title header-text" data-reactid="3">HASTA {this.props.numberOfMonths} MESES DE: {this.props.monthlyPayment}</p>
										<div className="small" data-reactid="4">(Pagando a meses: {this.props.fullPayment})</div>
										<div className="cta-text-link" role="link" tabIndex={0} data-reactid="5" onClick={handleShow}>
											Métodos de pago participantes
										</div>
										<Modal show={this.state.showModal} onHide={handleClose} animation={false}
											size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
											<Modal.Header closeButton>
												<Modal.Title>{this.props.paymentMethodsModalTitle}</Modal.Title>
											</Modal.Header>
											<Modal.Body>
												<br /><br />
												<Container fluid={true}>
													<Row className="show-grid">
														{this.props.paymentMethodsNames.map(function (paymentMethodName, index) {
															return <Col xs={4} md={2}><p><b>{paymentMethodName}</b></p></Col>
														})}
													</Row>
													<Row className="show-grid">
														{this.props.paymentMethodsLogos.map(function (paymentMethodLogo, index) {
															return <Col xs={4} md={2}><img className="payment-method-logo" src={paymentMethodLogo} /></Col>
														})}
													</Row>
													<Row className="show-grid">
														{this.props.paymentMethodsMonths.map(function (paymentMethodMonths, index) {
															return <Col xs={4} md={2}><p>Hasta {paymentMethodMonths} meses</p></Col>
														})}
													</Row>
												</Container>
												<br />
											</Modal.Body>
											<Modal.Footer>
												<a href="https://www.bestbuy.com.mx/c/servicios-financieros-meses/s255" target="_blank">Más información</a>
											</Modal.Footer>
										</Modal>
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

export default Financing;
