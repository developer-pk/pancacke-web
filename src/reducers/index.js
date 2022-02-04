import { combineReducers } from 'redux';
import Wallet from './wallet.reducer';
import Profile from './profile.reducer';
import Alert from './alertsReducer';
import Subscriptions from './subscriptions.reducer';
import Adverts from './advertsReducer';
import View from './view.reducer';
import IndustryReducer from './admin/industry/IndustryReducer'
import JobTitleReducer from './admin/jobtitle/JobTitleReducer'
import CountryReducer from './common/CountryReducer'
import StateReducer from './common/StateReducer'
import CityReducer from './common/CityReducer'
import HobbyReducer from './admin/hobby/HobbyReducer'
import CompanyReducer from './admin/company/CompanyReducer'
import ServiceNeedReducer from './admin/service_need/ServiceNeedReducer'
import ServiceOfferReducer from './admin/service_offer/ServiceOfferReducer'
import CollegeReducer from './admin/college/CollegeReducer'
import AdsReducer from './admin/ads/AdsReducer'
import AlertReducer from './common/AlertReducer'
import ContactUsReducer from './frontend/ContactUsReducer'
import TokenApiReducer from './frontend/TokenApiReducer'
import TokenInfoReducer from './frontend/TokenInfoReducer'
import TokenTransferListReducer from './frontend/TokenTransferListReducer'
import OtpReducer from './frontend/OtpReducer'
import TokenOtherInfoReducer from './frontend/TokenOtherInfoReducer'
import AlertTokenReducer from './frontend/AlertTokenReducer'
import FavouriteReducer from './frontend/FavouriteReducer'
import ForgotPasswordReducer from './frontend/ForgotPasswordReducer'
import TrendReducer from './frontend/TrendReducer'
import TcakeReducer from './frontend/TcakeReducer'
import PromotedTokenReducer from './admin/promoted_token/PromotedTokenReducer'
import InboundTokenReducer from './frontend/InboundTokenReducer'
import EcommerceReducer from './EcommerceReducer'

export default combineReducers({
  Wallet,
  Profile,
  Alert,
  Subscriptions,
  Adverts,
  View,
  industry:IndustryReducer,
  jobtitle:JobTitleReducer,
  country:CountryReducer,
  states:StateReducer,
  city:CityReducer,
  hobby:HobbyReducer,
  company:CompanyReducer,
  serviceneeds:ServiceNeedReducer,
  serviceoffering:ServiceOfferReducer,
  college:CollegeReducer,
  ads:AdsReducer,
  alert:AlertReducer,
  contactus:ContactUsReducer,
  symbols:TokenApiReducer,
  tokeninfo:TokenInfoReducer,
  transfers:TokenTransferListReducer,
  otp:OtpReducer,
  tokenotherinfo:TokenOtherInfoReducer,
  alertoken:AlertTokenReducer,
  favourite:FavouriteReducer,
  forgotpassword:ForgotPasswordReducer,
  trends:TrendReducer,
  tcake:TcakeReducer,
  promotedtokens:PromotedTokenReducer,
  inbound:InboundTokenReducer,
  ecommerce: EcommerceReducer,
});
