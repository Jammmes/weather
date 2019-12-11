import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { Provider, ReactReduxContext } from 'react-redux';

import '@/styles/global.scss';

import { Header, Content, Footer, Layout } from '@/components/layout';
import { configureStore } from '@/store/store';
import { Home } from '@/pages/home';
import { Active } from '@/pages/active';
import { Deleted } from '@/pages/deleted';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';

const history:any = createBrowserHistory();

const store = configureStore();

class App extends React.Component<{}> {
  public render() {
    return (
      <Provider store={store}>
      <ConnectedRouter history={history} context={ReactReduxContext}>
        <Layout>
          <Header>
            <AppHeader />
          </Header>
          <Content>
            <Switch>
              <Route path='/all' component={Home} />
              <Route path='/active' component={Active} />
              <Route path='/deleted' component={Deleted} />
              <Redirect to='/all' />
            </Switch>
          </Content>
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
      </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
