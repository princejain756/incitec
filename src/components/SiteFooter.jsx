import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, MapPin, MessageCircle, PhoneCall, Instagram } from 'lucide-react';
import { companyInfo } from '../data/company';
import logoImg from '../assets/logo/logo.webp';

const SiteFooter = () => {
  const whatsappNumber = companyInfo.whatsapp.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="footer-section footer-v2">
      <div className="footer-top-cta">
        <div>
          <p className="footer-kicker">Need Fast Assistance?</p>
          <h3>Get Product Availability and Pricing on WhatsApp</h3>
          <p>Share your requirement and our team will respond quickly.</p>
        </div>
        <div className="footer-cta-actions">
          <a className="footer-cta-btn footer-cta-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> WhatsApp Now
          </a>
          <Link className="footer-cta-btn footer-cta-outline" to="/contact">
            Contact Page <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-main-grid">
        <div className="footer-brand-col">
          <div className="footer-brand-logo">
            <img src={logoImg} alt="Incitec Logo" style={{ height: '40px', width: 'auto', marginBottom: '0.5rem' }} />
          </div>
          <p>{companyInfo.description}</p>
          <div className="footer-social-row">
            <a href={companyInfo.facebookUrl} target="_blank" rel="noreferrer" className="footer-social-pill">
              <Facebook size={16} /> Facebook
            </a>
            <a href={companyInfo.instagramUrl} target="_blank" rel="noreferrer" className="footer-social-pill notranslate">
              <Instagram size={16} /> Instagram
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="footer-social-pill">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-list footer-list-contact">
            {companyInfo.phones.map((phone, index) => (
              <li key={index}>
                <PhoneCall size={15} />
                <a href={`tel:${phone.replace(/\D/g, '')}`}>{phone}</a>
              </li>
            ))}
            <li>
              <MessageCircle size={15} />
              <a href={whatsappUrl} target="_blank" rel="noreferrer">{companyInfo.whatsapp}</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Address</h4>
          <ul className="footer-list footer-list-contact">
            <li>
              <MapPin size={15} />
              <span>{companyInfo.addressLines.join(', ')}</span>
            </li>
            <li><span>Service Area: {companyInfo.serviceArea}</span></li>
            <li style={{ marginTop: '0.4rem', color: 'var(--primary)', fontWeight: 700 }}>
              <span style={{ fontSize: '0.75rem', opacity: 0.8, display: 'block' }}>Registered GSTIN</span>
              {companyInfo.gstNumber}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-row">
        <span>&copy; {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.</span>
        <span>{companyInfo.tagline}</span>
      </div>
    </footer>
  );
};

export default SiteFooter;
