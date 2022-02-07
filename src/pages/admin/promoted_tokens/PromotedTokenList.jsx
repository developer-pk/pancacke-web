import React, { useState } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import TopNav from '../../../components/TopNavBar/TopNav';
import Sidebar from '../../../components/Sidebar/Sidebar';
import '../../explorer/ExplorerPage.scss';
import PromotedTokenTable from './PromotedTokenTable';

const PromotedTokenList = () => {
 

  return (
      <div className="ExplorerPage">
        <div className="Row">
      <div className="col-md-12">
        <TopNav />
      </div>
      </div>
      <div className="Row">

      <div className="col-md-2">
        <Sidebar />
      </div>

      <div className="col-md-10">
       <PromotedTokenTable />
      </div>
    </div>
      </div>
   
  );
};

export default PromotedTokenList;
