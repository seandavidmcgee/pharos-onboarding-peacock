/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/Onboarding/pages/CompanyDataPage');
  require('./modules/Onboarding/pages/SecurityDataPage');
  require('./modules/Onboarding/pages/CrownJewelsListPage/CrownJewelsListPage');
  require('./modules/Onboarding/pages/TerritoryListPage/TerritoryListPage');
  require('./modules/Onboarding/pages/ProtectionPage/ProtectionPage');
  require('./modules/Onboarding/pages/InvestmentListPage/InvestmentListPage');
  require('./modules/Onboarding/pages/StatusListPage/StatusListPage');
  require('./modules/Onboarding/pages/ControlsListPage/ControlsListPage');
  require('./modules/Onboarding/pages/ScheduleListPage');
  require('./modules/Post/pages/PostListPage/PostListPage');
  require('./modules/Post/pages/PostDetailPage/PostDetailPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRedirect to={'/company'} />
    <Route
      path="company"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/CompanyDataPage').default);
        });
      }}
    />
    <Route
      path="security"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/SecurityDataPage').default);
        });
      }}
    />
    <Route
      path="crownJewels"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/CrownJewelsListPage/CrownJewelsListPage').default);
        });
      }}
    />
    <Route
      path="territory"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/TerritoryListPage/TerritoryListPage').default);
        });
      }}
    />
    <Route
      path="protection"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/ProtectionPage/ProtectionPage').default);
        });
      }}
    />
    <Route
      path="investment"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/InvestmentListPage/InvestmentListPage').default);
        });
      }}
    />
    <Route
      path="status"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/StatusListPage/StatusListPage').default);
        });
      }}
    />
    <Route
      path="controls"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/ControlsListPage/ControlsListPage').default);
        });
      }}
    />
    <Route
      path="schedule"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Onboarding/pages/ScheduleListPage').default);
        });
      }}
    />
    <Route
      path="/posts/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Post/pages/PostDetailPage/PostDetailPage').default);
        });
      }}
    />
  </Route>
);
