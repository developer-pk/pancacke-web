import React from 'react';
import Subscription from '../../components/Subscription/Subscription';

import './MyAccount.scss';

const MyAccount = () => {
  return (
    <div>
      <h2 className="accountHeading">My account</h2>
      <div>
        <Subscription />
      </div>
    </div>
  );
};

export default MyAccount;
