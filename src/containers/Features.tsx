import { connect } from 'react-redux'
import Features from '../components/Features'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({ features: state.features })
}

export default connect(mapStateToProps)(Features);
