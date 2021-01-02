import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UploadPage } from './UploadPage';
import { AnalysisLayout } from './AnalysisLayout';
import { Missing } from './Missing';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={UploadPage} />
      <Route path="/results" component={AnalysisLayout} />
      <Route component={Missing} />
    </Switch>
  </Router>
);

export default AppRouter;
