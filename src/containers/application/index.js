import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ApplicationPage from 'components/application';
import { updateApp, getApp } from 'modules/application';
import { displayBanner } from 'modules/banner';

const Application = props => {
    return <div className="app-view--application pt4">
        <ApplicationPage {...props} />
    </div>;
};

const mapStateToProps = state => ({
    app: state.application.app,
    error: state.application.error,
    isRequestingUpdate: state.application.isRequestingUpdate,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateApp,
    getApp,
    displayBanner,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Application);
