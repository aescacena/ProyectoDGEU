import { connect } from 'react-redux'
import Protection from '../components/Protection'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        warrantyDuration: state.warrantyDuration,
        warrantyPrice: state.warrantyPrice
    })
}

export default connect(mapStateToProps)(Protection);
