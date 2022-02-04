import React, { Fragment } from 'react'

const Sidebar = () => {


    return (
        <Fragment>
             <div className="iq-sidebar">
        <div id="sidebar-scrollbar">
          <nav className="iq-sidebar-menu">
            <ul id="iq-sidebar-toggle" className="iq-menu">
            <li>
                <a href="/admin/ads" className="iq-waves-effect"><i className="las la-newspaper" /><span>Manage Ads</span></a>
              </li>
              <li>
                <a href="#mailbox" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-mail-line" /><span>Manage Ads</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="mailbox" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="/admin/ads"><i className="ri-inbox-line" />Ads</a></li>
                </ul>
              </li>
              <li>
                <a href="#mailbox" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-mail-line" /><span>Email</span><i className="ri-arrow-right-s-line iq-arrow-right" /></a>
                <ul id="mailbox" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                  <li><a href="app/index.html"><i className="ri-inbox-line" />Inbox</a></li>
                  <li><a href="app/email-compose.html"><i className="ri-edit-line" />Email Compose</a></li>
                </ul>
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
