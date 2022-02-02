import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../Home.css'
import 'material-react-toastify/dist/ReactToastify.css'

const Footer = ({ dispatch }) => {

    return (
            <div className="common-footer-wrapper">
            <div className="footer">
            <div className="container">
                <ul>
                    <li><a href="https://tcake.io/about-project/">About Us</a></li>
                    <li><a href="https://tcake.io/contact/">Contact Us</a></li>
                    <li><a href="https://tcake.io/privacy-policy/">Privacy Policy</a></li>
                    <li><a href="https://tcake.io/ads-disclaimer/">Terms & Conditions</a></li>
                </ul>
                <div className="footer_bottom">&copy; Copyrights 2021 TCAKE.io | All rights reserved.</div>
            </div>
            </div>
            </div>
    )
}

export default connect()(Footer)
