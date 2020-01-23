import React from 'react';

interface IDescriptionProps {
	description: string;
}

class Description extends React.Component<IDescriptionProps, {}> {

	constructor(props: IDescriptionProps) {
		super(props);
	}

    public render() {
        return (
            <>
                <div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f04" data-version="2.0.0">
							<div className="bbmx-product-description">
								<div className="descriptionContainer body-copy-lg" data-reactroot="" data-reactid="1" data-react-checksum="2101230822">
									<div data-reactid="2">
										<p data-reactid="3">{ this.props.description }</p>
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

export default Description;
