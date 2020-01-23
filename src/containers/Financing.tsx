import { connect } from 'react-redux'
import Financing from '../components/Financing'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        numberOfMonths: state.numberOfMonths,
        monthlyPayment: state.monthlyPayment,
        fullPayment: state.fullPayment,
    })
}

export default connect(mapStateToProps)(Financing);
