import { connect } from 'react-redux'
import Price from '../components/Price'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        paymentMethods: state.paymentMethods,
        currentPrice: state.currentPrice,
        discountAmount: state.discountAmount,
        price: state.price,
        discountExpirationDate: state.discountExpirationDate,
    })
}

export default connect(mapStateToProps)(Price);
