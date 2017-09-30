import React from "react";
import { connect } from 'react-redux';

import { User } from './User';
import { Main } from './Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName('Zhao Yinji')}/>
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapSateToProps = (state) => {
    return {
        user: state.user,
        math: state.math
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: 'SET_NAME',
                payload: name
            });
        }
    };
};

export default connect(mapSateToProps, mapDispatchToProps)(App);
