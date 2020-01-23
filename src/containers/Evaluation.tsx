import { connect } from 'react-redux'
import Evaluation from '../components/Evaluation'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        rating: state.rating,
        numberOfReviews: state.numberOfReviews
    })
}

export default connect(mapStateToProps)(Evaluation);
