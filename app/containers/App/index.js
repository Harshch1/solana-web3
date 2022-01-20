import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NotifMessage } from 'Components';
import { LocaleContext } from 'Contexts';
import { Landing } from '../pageListAsync';

class App extends React.Component {
  static contextType = LocaleContext;

  render() {
    const { BASE_ROUTE_LOCALE } = this.context;

    return (
      <Fragment>
        <Switch>
          <Route exact path={BASE_ROUTE_LOCALE + "/"} component={Landing} />
        </Switch>
        <NotifMessage />
      </Fragment>
    );
  }
}

export default App;
