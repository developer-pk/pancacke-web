import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types'
import Navigation from '../navigation/Navigation';
import SocialNav from '../socialnav/SocialNav';
import Button from '../Button/Button';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import cakeIcon from '../../assets/icon-cake.png';
import { useSelector } from 'react-redux';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';

const Navbar = ({ theme, toggleTheme, ...rest }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { loggedIn } = useSelector((store) => store.Profile);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const mobileMenuRef = useRef(null);

  useDetectOutsideClick(mobileMenuRef, () => setMobileMenuOpen(false));

  if (windowWidth < 1200) {
    return (
      <div className="Navbar-mobile" ref={mobileMenuRef}>
        <AnimateSharedLayout>
          <motion.nav layout>
            <motion.div layout className="Navbar-mobile__header">
              <Link to="/" className="logo">
                <img src={logoImg} alt="pancake" />
              </Link>
              <div>
                <button className="switchTheme" onClick={toggleTheme}>
                  {theme === 'light' && <i className="icon-sun"></i>}
                  {theme === 'dark' && <i className="icon-moon"></i>}
                </button>
                <Button onClick={toggleMobileMenu}>Menu</Button>
              </div>
            </motion.div>
            <AnimatePresence>
              {isMobileMenuOpen ? (
                <Navigation
                  onClick={toggleMobileMenu}
                  elements={[
                    { label: 'Pair explorer', href: '/pair-explorer' },
                    { label: 'Pool explorer', href: '/pool-explorer', disabled: false },
                    { label: 'Contact', href: '/contact', disabled: true },
                    { label: 'My account', href: '/my-account', disabled: !loggedIn },
                  ]}
                  mobile
                  isOpen={isMobileMenuOpen}
                />
              ) : null}
            </AnimatePresence>
          </motion.nav>
        </AnimateSharedLayout>
      </div>
    );
  }

  return (
    <div className="Navbar">
      <a href="https://tcake.io" target="_blank" className="logo" rel="noreferrer">
        <img src={logoImg} alt="pancake" />
      </a>
      <Navigation
        elements={[
          { label: 'Pair explorer', href: '/pair-explorer', external: false },
          { label: 'Pool explorer', href: '/pool-explorer', disabled: false, external: false },
          { label: 'Contact', href: 'https://tcake.io/contact/', disabled: false, external: true },
          { label: 'My account', href: '/my-account', disabled: !loggedIn, external: false },
        ]}
      />

      <button className="switchTheme" onClick={toggleTheme}>
        {theme === 'light' && <i className="icon-sun"></i>}
        {theme === 'dark' && <i className="icon-moon"></i>}
      </button>

      <SocialNav
        elements={[
          { label: <i className="icon-twitter" />, href: 'https://twitter.com/tcake_official' },
          { label: <i className="icon-telegram-1" />, href: 'https://t.me/tcake_announcements' },
          { label: <i className="icon-group" />, href: 'https://t.me/tcake_official' },
          { label: <i className="icon-mail" />, href: 'mailto:info@tcake.io' },
          {
            label: <img src={cakeIcon} style={{ marginTop: 3 }} alt="cake icon" />,
            href: 'https://bscscan.com/token/0x3b831d36ed418e893f42d46ff308c326c239429f',
          },
        ]}
      />
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
