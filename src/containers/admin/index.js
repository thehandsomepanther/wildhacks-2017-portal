import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getUserPage } from 'modules/user';

const Admin = props => (
    <div className="app-view--admin-dashboard">
       <h1>Admin</h1>
    </div>
);

const mapStateToProps = state => ({
    fetchingUsers: state.user.fetchingUsers,
    users: state.user.instances,
    page: state.user.page,
    pageSize: state.user.pageSize,
    totalPages: state.user.totalPages,
    totalUsers: state.user.totalUsers,
    auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getUserPage,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Admin);