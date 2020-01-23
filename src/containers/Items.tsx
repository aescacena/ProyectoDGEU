import { connect } from 'react-redux'
import Items from '../components/Items'
import IGlobalState from '../state/globalState';

const mapStateToProps = (state: IGlobalState) => {
    return ({ items: state.items })
}

export default connect(mapStateToProps)(Items);
