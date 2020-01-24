import { connect } from 'react-redux'
import Financing from '../components/Financing'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        numberOfMonths: state.numberOfMonths,
        monthlyPayment: state.monthlyPayment,
        fullPayment: state.fullPayment,
        paymentMethodsModalTitle: state.paymentMethodsModalTitle,
        paymentMethodsNames: state.paymentMethodsNames,
        paymentMethodsLogos: state.paymentMethodsLogos,
        paymentMethodsMonths: state.paymentMethodsMonths
    })
}

export default connect(mapStateToProps)(Financing);
