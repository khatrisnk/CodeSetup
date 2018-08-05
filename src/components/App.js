import React from 'react';
import PropTypes from 'prop-types';

import Products from '../containers/Products';

const App = props => {
    console.log("App Props : ",props);
    return (<div>
        <Products />
    </div>);
}

App.propTypes = {
    appData: PropTypes.object.isRequired,
    getAppData: PropTypes.func.isRequired
}

App.defaultProps = {
    appData: {},
    getAppData: () => console.log('Get App Data Called !!!')
}

export default App;