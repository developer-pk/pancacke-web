import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TopNav from '../../../components/TopNavBar/TopNav';
import Sidebar from '../../../components/Sidebar/Sidebar';

import AddForm from './AddForm';
import '../../../css/common.css';
import useAuth from '../../../hooks/useAuth';

const AddToken = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const {
    isAuthenticated,
    // user
  } = useAuth();
  let authenticated = isAuthenticated;
  return (
      <div className="TokenPage">
        <div className="Row">
      <div className="col-md-12">
        <TopNav />
      </div>
      </div>
      <div className="Row">

      <div className="col-md-2  pl-0">
        <Sidebar />
      </div>

      <div className="col-md-10">
       <AddForm />
      </div>
    </div>
      </div>
   
  );
};

export default AddToken;
