import React from 'react';

interface ISpecsProps {
	mainFeatures: {};
	basicFeatures: {};
	activity: {};
	conectivity: {};
	performance: {};
	power: {};
	clock: {};
	material: {};
	dimension: {};
	warranty: {};
	general: {};
	others: {};
}

class Specs extends React.Component<ISpecsProps, {}> {

	constructor(props: ISpecsProps) {
		super(props);
	}

	public generateSpecsSection(features: {}) {

		/*
		Auxiliary function to generate a section of features.

		Input: Dictionary with the format K -> [V1,V2], where
			   K is the name of the feature, V1 the description
			   of the feature and V2 the value of the feature.

		Output: A section of features with the name of the
				feature (bold), an info icon which displays a modal
				with the feature info (if V1 is present) and
				the value of the feature.
		
		Author: Pedro Bernáldez Torres
		*/

		return Object.entries(features).map(([key, value]) => {

			let v = value as string[];

			let specName = key;
			let specDescription = v[0];
			let specValue = v[1];

			if (specDescription == "") {
				return (<tr className="specification-row">
					<td className="specification-name">{specName}</td>
					<td className="specification-value">{specValue}</td>
				</tr>)
			} else {
				return (<tr className="specification-row">
					<td className="specification-name"><a data-content={specDescription} data-html="true" data-placement="auto bottom" data-role="button" data-toggle="popover" data-trigger="focus" href="#" tabIndex={0} title={specName}>{specName}<i className="fistack info-icon"><i className="ficon-2x ficon-info"></i></i></a></td>
					<td className="specification-value">{specValue}</td>
				</tr>)
			}

		})

	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div className="specifications-component-container" data-reactroot="">
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Características principales</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.mainFeatures) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Características</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.basicFeatures) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Actividad</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.activity) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Conectividad</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.conectivity) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Rendimiento</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.performance) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Poder</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.power) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Reloj</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.clock) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Material</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.material) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Dimensión</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.dimension) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Garantía</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.warranty) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">General</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
										{ this.generateSpecsSection(this.props.general) }
										</tbody>
									</table>
								</div>
							</div>
							<div className="row specifications-container">
								<div className="col-xs-4">
									<p className="specifications-title">Otros</p>
								</div>
								<div className="col-xs-8">
									<table className="specifications-table">
										<tbody>
											{ this.generateSpecsSection(this.props.others) }
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default Specs;
