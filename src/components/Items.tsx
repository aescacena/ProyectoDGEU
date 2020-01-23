import React from 'react';

interface IItemsProps {
	items: string[];
}

class Items extends React.Component<IItemsProps, {}> {

	constructor(props: IItemsProps) {
		super(props);
	}

	public render() {
		return (
			<>
				<div className="widget-wrapper">
					<div data-reactroot="">
						<div id="widget-86566779-2dcd-4542-b8fc-5d00f4192dbc" data-version="2.0.0">
							<link rel="stylesheet" href="https://mexico.bbystatic.com/@bbmx/bbmx/included-items/dist/client/client-ac4b21a5df9abc7e6331711f3aa5dfe8.css" />
							<div className="bbmx-included-items">
								<div className="includedItemsContainer" data-reactroot="" data-reactid="1" data-react-checksum="-1585863168">
									<h3 className="heading-5 v-fw-regular" data-reactid="2">Que Incluye</h3>
									<hr role="presentation" data-reactid="3" />
									<ul data-reactid="4">
										{this.props.items.map(function (element, index) {
											return <li data-reactid={index + 5}>{element}</li>
										})}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default Items;
