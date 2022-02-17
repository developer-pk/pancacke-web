import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TopNav from '../../../components/TopNavBar/TopNav';
import Sidebar from '../../../components/Sidebar/Sidebar';
import '../../../css/common.css';
import AddPromotedForm from './AddPromotedForm';

const AddPromotedToken = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
      <div className="PromotedPage">
        <div className="Row">
      <div className="col-md-12">
        <TopNav />
      </div>
      </div>
      <div className="Row">

      <div className="col-md-2 pl-0">
        <Sidebar />
      </div>

      <div className="col-md-10">
       <AddPromotedForm />
      </div>
    </div>
      </div>
   
  );
};

export default AddPromotedToken;
