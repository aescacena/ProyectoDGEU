import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Product from './components/Product';
import Description from './components/Description';
import Price from './components/Price';
import Financing from './components/Financing';
import Shipping from './components/Shipping';
import Protection from './components/Protection';
import Items from './components/Items';
import Features from './components/Features';
import Evaluation from './components/Evaluation';
import Services from './components/Services';
import Specs from './components/Specs';
import Reviews from './components/Reviews';

ReactDOM.render(<Product />, document.getElementById('product-component-div'));
ReactDOM.render(<Description />, document.getElementById('description-component-div'));
ReactDOM.render(<Price />, document.getElementById('price-component-div'));
ReactDOM.render(<Financing />, document.getElementById('financing-component-div'));
ReactDOM.render(<Shipping />, document.getElementById('shipping-component-div'));
ReactDOM.render(<Protection />, document.getElementById('protection-component-div'));
ReactDOM.render(<Items />, document.getElementById('items-component-div'));
ReactDOM.render(<Features />, document.getElementById('features-component-div'));
ReactDOM.render(<Evaluation />, document.getElementById('evaluation-component-div'));
ReactDOM.render(<Services />, document.getElementById('services-component-div'));
ReactDOM.render(<Specs />, document.getElementById('specs-component-div'));
ReactDOM.render(<Reviews />, document.getElementById('reviews-component-div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
