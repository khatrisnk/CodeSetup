import { connect } from 'react-redux'
import actions from '../actions/';
import TheComponent from '../components/App';

const mapStateToProps = (state, ownProps) => {
    return {
        appData: state.appData
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAppData: () => {
            dispatch({type: actions.BASIC_ACTION, data: {text: 'new text'}})
        }
    }
}
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(TheComponent)

export default App;