import { connect } from 'react-redux'
import Specs from '../components/Specs'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({
        mainFeatures: state.mainFeatures,
        basicFeatures: state.basicFeatures,
        activity: state.activity,
        conectivity: state.conectivity,
        performance: state.performance,
        power: state.power,
        clock: state.clock,
        material: state.material,
        dimension: state.dimension,
        warranty: state.warranty,
        general: state.general,
        others: state.others
    })
}

export default connect(mapStateToProps)(Specs);
