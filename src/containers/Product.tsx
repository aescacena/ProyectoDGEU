import { connect } from 'react-redux'
import Product from '../components/Product'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        name: state.name,
        model: state.model,
        sku: state.sku,
        rating: state.rating,
        numberOfReviews: state.numberOfReviews
    })
}

export default connect(mapStateToProps)(Product);
