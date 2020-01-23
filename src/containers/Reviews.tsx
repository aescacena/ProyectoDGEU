import { connect } from 'react-redux'
import Reviews from '../components/Reviews'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        rating: state.rating,
        numberOfReviews: state.numberOfReviews
    })
}

export default connect(mapStateToProps)(Reviews);
