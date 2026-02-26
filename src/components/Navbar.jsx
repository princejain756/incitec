import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Sprout,
  Info,
  Phone,
  ChevronDown,
  Leaf,
  Database,
  FlaskConical,
  Wheat,
  Droplets
} from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logoImg from '../assets/logo/logo.webp';
import mascotImg from '../assets/logo/mascot.webp';

const productItems = [
  { name: 'DEFENDER', icon: <Database size={20} />, desc: 'Soil health protector' },
  { name: 'PDM Potash', icon: <FlaskConical size={20} />, desc: 'Natural potassium' },
  { name: 'Bhoomiputra', icon: <Sprout size={20} />, desc: 'Bio-NPK Consortia' },
  { name: 'DNP', icon: <Droplets size={20} />, desc: 'Dynamic nutrients' },
  { name: 'PROM', icon: <Wheat size={20} />, desc: 'Organic phosphate' },
  { name: 'Leen T20', icon: <Leaf size={20} />, desc: 'Soil conditioner' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const isProductsActive = location.pathname === '/products';

  return (
    <>
      <div className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <Link to="/" className="nav-logo">
            <img src={logoImg} alt="Incitec Logo" style={{ height: '64px', width: 'auto', margin: '-16px 0' }} />
            <div className="nav-heritage-badge" style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', marginLeft: '8px' }}>
              <img src={mascotImg} alt="Mascot" style={{ height: '24px', width: 'auto' }} />
              <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.5px' }}>20 Years</span>
            </div>
          </Link>

          <div className="nav-right">
            <nav className="desktop-menu">
              <DesktopNavItem to="/" label="Home" end />

              <div
                className="nav-item"
                onMouseEnter={() => setActiveDropdown('products')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active' : ''} ${activeDropdown === 'products' ? 'hovered' : ''}`
                  }
                >
                  Products
                  <ChevronDown size={14} className={`nav-chevron ${activeDropdown === 'products' ? 'open' : ''}`} />
                </NavLink>
                {isProductsActive && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="navIndicator"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}

                <AnimatePresence>
                  {activeDropdown === 'products' && (
                    <motion.div
                      className="nav-dropdown"
                      initial={{ opacity: 0, y: 10, rotateX: -10 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={{ opacity: 0, y: 10, rotateX: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="dropdown-card">
                        {productItems.map((item) => (
                          <Link to="/products" key={item.name} className="dropdown-item">
                            <div className="dropdown-icon">{item.icon}</div>
                            <div className="dropdown-text">
                              <h4>{item.name}</h4>
                              <p>{item.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <DesktopNavItem to="/about" label="About" />
              <DesktopNavItem to="/contact" label="Contact" />
            </nav>
            <div id="google_translate_element" className="translate-widget"></div>
          </div>
        </div>
      </div >

      <div className="mobile-bottom-bar">
        <MobileNavItem to="/" icon={<Home size={24} />} label="Home" end />
        <MobileNavItem to="/products" icon={<Sprout size={24} />} label="Products" />
        <MobileNavItem to="/about" icon={<Info size={24} />} label="About" />
        <MobileNavItem to="/contact" icon={<Phone size={24} />} label="Contact" />
      </div>
    </>
  );
};

const DesktopNavItem = ({ to, label, end = false }) => {
  const location = useLocation();
  const isActive = end ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <div className="nav-item">
      <NavLink
        to={to}
        end={end}
        className={({ isActive: linkActive }) => `nav-link ${linkActive ? 'active' : ''}`}
      >
        {label}
      </NavLink>
      {isActive && (
        <motion.div
          className="nav-indicator"
          layoutId="navIndicator"
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </div>
  );
};

const MobileNavItem = ({ to, icon, label, end = false }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <motion.div
            className="mobile-active-bg"
            layoutId="mobileNavBg"
            initial={false}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
        <div className="mobile-nav-icon-container">{icon}</div>
        <span>{label}</span>
      </>
    )}
  </NavLink>
);

export default Navbar;
