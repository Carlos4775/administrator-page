import { Switch, Route } from 'react-router-dom';

const Content = () => (
  <Switch>
    <Route exact path="/page-1" component={() => <span>Page 1</span>} />
    <Route exact path="/page-2" component={() => <span>Page 2</span>} />
    <Route exact path="/page-3" component={() => <span>Page 3</span>} />
    <Route exact path="/page-4" component={() => <span>Page 4</span>} />
    <Route exact path="/page-5" component={() => <span>Page 5</span>} />
    <Route
      exact
      path="/medialibrary"
      component={() => <span>Media Library</span>}
    />
  </Switch>
);

export default Content;
