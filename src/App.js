import React, { useContext, useEffect } from 'react';
import './css/pancacke.css';
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// import Navbar from './components/navbar/Navbar';
import { ExplorerPage } from './pages/explorer/ExplorerPage';
import Container from './components/container/Container';
import { PoolExplorerPage } from './pages/PoolExplorer/PoolExplorerPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdminPage } from './pages/admin/AdminPage';
import MyAccount from './pages/myAccount/MyAccount';
import { AlertsComponent } from './components/Alerts/AlertsComponent';
import ThemeContext from './contexts/ThemeContext';
import { useDispatch } from 'react-redux';
import { SubscriptionsActions } from './actions/subscriptionsAction';
import { AdvertsActions } from './actions/advertsActions';
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from './contexts/JWTAuthContext';

const client = new QueryClient();
function App() {
  const { theme, toggle } = useContext(ThemeContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SubscriptionsActions.getSubscriptionData());
    dispatch(AdvertsActions.fetchAdverts());
  }, []);

  return (
    <div className={`App ${theme}`}>
      <QueryClientProvider client={client}>
      <AlertsComponent />
      <Router>
      <AuthProvider>
        {/* <Navbar theme={theme} toggleTheme={toggle} /> */}
        <Container>
          <Switch>
            <Route path="/pair-explorer/:pair/:contract/:version?">
              <ExplorerPage theme={theme} />
            </Route>
            <Route path="/pool-explorer">
              <PoolExplorerPage theme={theme} />
            </Route>
            <Route path="/my-account">
              <MyAccount />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Redirect to="/pair-explorer/Tcake/0x3b831d36ed418e893f42d46ff308c326c239429f/v2" />
          </Switch>
        </Container>
        </AuthProvider>
      </Router>
      </QueryClientProvider>

    </div>
  );
}

export default App;
