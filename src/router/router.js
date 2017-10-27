import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from 'views/app';

const { ConnectedRouter } = routerRedux;

const Routers = ({ history, app }) => {
  const error = dynamic({
    app,
    component: () => import('../views/error')
  });

  const routes = [{
    path: '/login',
    models: () => [import('../models/login/login')],
    component: () => import('../views/login/')
  }, {
    path: '/product-list',
    models: () => [import('../models/issue/product-list')],
    component: () => import('../views/product-list')
  }];

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/product-list" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key} exact path={path} component={dynamic({ app, ...dynamics })} />
            ))
          }
          <Route component={error} />
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
