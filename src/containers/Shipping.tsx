import { connect } from 'react-redux'
import Shipping from '../components/Shipping'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        shippingPrice: state.shippingPrice,
        shippingDescription: state.shippingDescription,
        pickUpPrice: state.pickUpPrice,
        pickUpDescription: state.pickUpDescription
    })
}

export default connect(mapStateToProps)(Shipping);
