import React from 'react';

import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import Page1 from './components/Page1';
import Page2 from './components/Page2';


export default (<Router history={hashHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Page1} />
        <Route path="page2/:userName" component={Page2} />
    </Route>
</Router>)