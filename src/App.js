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
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from './contexts/JWTAuthContext';
import JwtRegister from './pages/register/JwtRegister';
import Otp from './pages/otp/Otp';
import Dashboard from './pages/dashboard/Dashboard';
import AddAds from './pages/admin/ads/AddAds';
import AdsList from './pages/admin/ads/AdsList';
import AlertList from './pages/admin/alerts/AlertList';
import PromotedTokenList from './pages/admin/promoted_tokens/PromotedTokenList';
import TokenList from './pages/admin/upload_tokens/TokenList';
import AddToken from './pages/admin/upload_tokens/AddToken';
import AddPromotedToken from './pages/admin/promoted_tokens/AddPromotedToken';
import ContactList from './pages/admin/contacts/ContactList';
import useAuth from './hooks/useAuth';
// import MatxTheme from './components/MatxTheme/MatxTheme';
// import MatxLayout from './components/MatxLayout/MatxLayout';
// import MatxSuspense from './components/MatxSuspense/MatxSuspense';
// import { default as GlobalCss  } from './styles/GlobalCss';
// import { SettingsProvider } from './contexts/SettingsContext';
import AuthGuard from './auth/AuthGuard'
import { useHistory, useParams } from 'react-router';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Login from './pages/Login/Login';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faHeart, faBell, faTimes, faCopy, faAngleDown, faClose } from '@fortawesome/free-solid-svg-icons'
library.add(fab,faHeart,faBell,faTimes,faCopy,faAngleDown,faClose);

const client = new QueryClient();

function App() {
  const { theme, toggle } = useContext(ThemeContext);
  const history = useHistory();
  //console.log(history,'histroy');
  const dispatch = useDispatch();
  const {
    isAuthenticated,
    // user
  } = useAuth();

  let authenticated = isAuthenticated;
  console.log(authenticated,'yes ther');
  useEffect(() => {
    dispatch(SubscriptionsActions.getSubscriptionData());
    dispatch(AdvertsActions.fetchAdverts());
  }, []);
  
  return (
    <div className={`App ${theme}`}>
      <QueryClientProvider client={client}>
        {/*<SettingsProvider>
      <MatxTheme>
        <GlobalCss /> */}
        <AlertsComponent />
        <ToastContainer position="top-right"
                                autoClose={3000}
                                hideProgressBar
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover />
        <Router history={history}>
          <AuthProvider>
            {/* <Navbar theme={theme} toggleTheme={toggle} /> */}
            <Container>
             
              
         
                {/* <Route path="/admin">
              <AdminPage />
            </Route> */}
             <Switch>  
                <Route path="/signup">
                  <JwtRegister />
                </Route>
                <Route path="/otp-verify">
                  <Otp />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/forgot-password">
                  <ForgotPassword />
                </Route>
                
                 
                 <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/add-ads">
                  <AddAds />
                </Route>
                <Route path="/ads">
                  <AdsList />
                </Route>
                <Route path="/alerts">
                  <AlertList />
                </Route>
                <Route path="/promoted-tokens">
                  <PromotedTokenList />
                </Route>
                <Route path="/promoted-token/add">
                  <AddPromotedToken />
                </Route>
                <Route path="/tokens">
                  <TokenList />
                </Route>
                <Route path="/add-token">
                  <AddToken />
                </Route>
                <Route path="/contacts">
                  <ContactList />
                </Route>  
                <Route path="/pair-explorer/:pair/:contract/:version?">
                <ExplorerPage theme={theme} />
              </Route>
              <Route path="/pool-explorer">
                <PoolExplorerPage theme={theme} />
              </Route>
              <Route path="/my-account">
                <MyAccount />
              </Route>
              <Redirect to="/pair-explorer/Tcake/0x3b831d36ed418e893f42d46ff308c326c239429f/v2" />
              </Switch>

                
                 
     
               
              
              


            </Container>
          </AuthProvider>
        </Router>
        {/* </MatxTheme>
      </SettingsProvider> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
