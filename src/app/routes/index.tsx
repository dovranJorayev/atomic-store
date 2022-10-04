import Home from '@pages/home';
import { Route, Switch } from 'react-router-dom';

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  )
}