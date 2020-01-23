import React from 'react';

interface IEvaluationProps {
	rating: string;
	numberOfReviews: string;
}

class Evaluation extends React.Component<IEvaluationProps, {}> {

	constructor(props: IEvaluationProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-86566779-2dcd-4542-b8fc-5d00f4192dbd" data-version="3.3.0">
							<link rel="stylesheet" href="https://mexico.bbystatic.com/@bbmx/bbmx/ugc-overview/dist/client/client-f21056cf64a552f4cb5906b745a93a62.css" />
							<div className="bbmx-ugc-overview">
								<div className="ugc-overview" data-reactroot="" data-reactid="1" data-react-checksum="-1661877507">
									<h3 className="heading-5 v-fw-regular" data-reactid="2">Evaluación y Reseñas</h3>
									<hr role="presentation" data-reactid="3" />
									<div className="ugc-overall-rating heading-6 v-fw-regular" data-reactid="4">
										Calificación General del Cliente:
                                    </div>
									<div className="ugc-rating" data-reactid="7"><a href="javascript:void(0);" data-reactid="8">
										<div className="c-ratings-reviews v-large v-split" data-reactid="9">
											<p className="sr-only" data-reactid="10"></p><span className="v-split-item" data-reactid="11"><span className="c-stars c-stars-large" aria-hidden="true" data-reactid="12"><span className="unfilled" data-reactid="13"></span><span className="filled" style={{ width: "98.00000000000001%" }} data-reactid="14"></span></span><span className="c-review-average" aria-hidden="true" data-reactid="15">{this.props.rating}</span></span><span className="c-reviews" data-reactid="16"><span className="c-total-reviews" aria-hidden="true" data-reactid="17">({this.props.numberOfReviews} Reseñas)</span></span>
										</div>
									</a></div>
									<div role="link" tabIndex={0} className="ugc-see-all btn btn-secondary btn-sm" data-reactid="22">Ver todas las Reseñas</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default Evaluation;
