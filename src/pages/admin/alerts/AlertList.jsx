import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TopNav from '../../../components/TopNavBar/TopNav';
import Sidebar from '../../../components/Sidebar/Sidebar';
import '../../../css/common.css';
import AlertTable from './AlertTable';

const AlertList = () => {
 

  return (
      <div className="ExplorerPage">
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
       <AlertTable />
      </div>
    </div>
      </div>
   
  );
};

export default AlertList;
