import React from 'react';

interface IPriceProps {
    paymentMethods: string[];
    currentPrice: string;
    discountAmount: string;
    price: string;
    discountExpirationDate: string;
}

class Price extends React.Component<IPriceProps, {}> {

    constructor(props: IPriceProps) {
        super(props);
    }

    public generatePriceSection() {

		/*
		Auxiliary function to generate the price section.

		Input: -

        Output: A price section with promotion if currentPrice,
                discountAmount and discountExpirationDate are
                present, or without promotion otherwise.
		
		Author: Pedro Bernáldez Torres
		*/

        if (this.props.currentPrice == "" || this.props.discountAmount == "" || this.props.discountExpirationDate == "") {
            return (<div className="product-price" data-reactid="4">{this.props.price}</div>)
        } else {
            return (<><div className="product-price" data-reactid="4">{this.props.currentPrice}</div>
                <div data-reactid="5">
                    <div className="product-savings" data-reactid="6">AHORRA {this.props.discountAmount}</div>
                    <div className="product-regprice" data-reactid="10">Antes {this.props.price}</div>
                </div>
                <div className="price-valid-until" data-reactid="14">Precio vigente hasta: {this.props.discountExpirationDate}</div></>)
        }

    }

    public render() {
        return (
            <>
                <div className="widget-wrapper">
                    <div data-reactroot="">
                        <div id="widget-667a5176-6029-414e-8c0c-b8f6f87c0f07" data-version="2.0.2">
                            <div className="shop-price-block">
                                <div className="price-block " data-reactroot="" data-reactid="1" data-react-checksum="1704590306">
                                    <div className="product-price-label" data-reactid="2">PRECIO DE CONTADO:</div>
                                    <div className="product-price-label-description" data-reactid="3">({this.props.paymentMethods.join(", ")})</div>
                                    { this.generatePriceSection() }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default Price;
