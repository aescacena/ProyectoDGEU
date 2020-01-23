import { connect } from 'react-redux'
import Description from '../components/Description'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({ description: state.description })
}

export default connect(mapStateToProps)(Description);
