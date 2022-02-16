import React, { Fragment } from 'react'

const Sidebar = () => {


    return (
        <Fragment>
             <div className="iq-sidebar">
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
           
              <li>
                <a href="#mailbox" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-box-open" /><span>Manage Ads</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="mailbox" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="/ads"><i className="ri-inbox-line" />Ads</a></li>
                </ul>
              </li>
              <li>
                <a href="/alerts" className="iq-waves-effect"><i className="las la-bell" /><span>Alerts</span></a>
              </li>
              <li>
                <a href="/tokens" className="iq-waves-effect"><i className="las la-toolbox" /><span>Tokens</span></a>
              </li>
              <li>
                <a href="/promoted-tokens" className="iq-waves-effect"><i className="las la-toolbox" /><span>Promoted Tokens</span></a>
              </li>
              <li>
                <a href="/contacts" className="iq-waves-effect"><i className="las la-address-book" /><span>Contact Us</span></a>
              </li>
            
            </ul>
          </nav>
          <div className="p-3" />
        </div>
      </div>
        </Fragment>
    )
}

export default Sidebar
