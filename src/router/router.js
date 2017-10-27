import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from 'views/app';

const { ConnectedRouter } = routerRedux;

const Routers = ({ history, app }) => {
  const routes = [];

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          {
            routes.map(({ path, ...dynamics }, key) =>
              <Route key={key} exact component={dynamic({ app, ...dynamics })} />
            )
          }
        </Switch>
      </App>
    </ConnectedRouter>
  );
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object
};


export default Routers;
