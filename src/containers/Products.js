import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import actions from '../actions/';
import TheComponent from '../components/Products';

class Products extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("Constructor!");
    }
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps : ", props, state);
        return null;
    }

    componentDidMount(){
        console.log("componentDidMount!");
        this.props.getNewProducts();
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate : ", prevProps, prevState);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate : ", prevProps, prevState, snapshot);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount!");
    }

    render() {
        console.log("render : ", this.props);
        return <TheComponent {...this.props}/>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        newProducts: state.newProducts
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getNewProducts: () => {
          dispatch({type: actions.GET_NEW_PRODUCT})
        }
    }
}

Products.propTypes = {
    newProducts: PropTypes.object,
    getNewProducts: PropTypes.func
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);