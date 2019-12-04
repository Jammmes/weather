import React from 'react';
import { Header, Content, Footer, Layout } from '@/components/layout';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import '@/styles/global.scss';

import { Home } from '@/pages/home';
import { Active } from '@/pages/active';
import { Deleted } from '@/pages/deleted';

class App extends React.Component<{}> {
  public render() {
    return (
      <Router>
        <Layout>
          <Header> Header</Header>
          <Content>
            <Switch>
              <Route path='/all' component={Home} />
              <Route path='/active' component={Active} />
              <Route path='/deleted' component={Deleted} />
              <Redirect to='/all' />
            </Switch>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);
