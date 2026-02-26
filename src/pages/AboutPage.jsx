import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  Building2,
  CalendarDays,
  FileBadge2,
  Handshake,
  MapPin,
  MessageCircle,
  Sprout,
  Users2
} from 'lucide-react';
import { companyInfo } from '../data/company';
import mascotImg from '../assets/logo/mascot.webp';

const statItems = [
  {
    icon: CalendarDays,
    value: companyInfo.gstRegistrationDate,
    label: 'GST Registration Date'
  },
  {
    icon: FileBadge2,
    value: companyInfo.gstNumber,
    label: 'GST Number'
  }
];

const snapshotItems = [
  {
    icon: Building2,
    text: `${companyInfo.businessType} based in Karnataka`
  },
  {
    icon: BadgeCheck,
    text: `Leadership: CEO ${companyInfo.ceo}`
  },
  {
    icon: Users2,
    text: `Partners: ${companyInfo.partners.join(' and ')}`
  },
  {
    icon: Handshake,
    text: `Core line: ${companyInfo.tagline}`
  },
  {
    icon: MapPin,
    text: `Service area: ${companyInfo.serviceArea}`
  }
];

const revealUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.2 }
};

const AboutPage = () => {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <section className="section page-section about-v2">
      <div className="about-v2-bg about-v2-bg-a" />
      <div className="about-v2-bg about-v2-bg-b" />

      <motion.header className="about-hero-panel" {...revealUp}>
        <div className="about-hero-copy">
          <p className="about-eyebrow" style={{ boxShadow: '0 4px 12px rgba(45,90,39,0.15)' }}>Karnataka Agriculture Supply Network</p>
          <h1 style={{ fontFamily: 'Outfit, sans-serif' }}>About {companyInfo.legalName}</h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.85 }}>
            {companyInfo.legalName} is a Karnataka-based wholesaler and distributor serving agriculture and
            related supply needs in Karnataka with practical procurement, stock availability, and reliable
            support.
          </p>

          <div className="about-focus-tags">
            <span style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>Organic Manure</span>
            <span style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>PGP Solutions</span>
            <span style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>Fertilizer Distribution</span>
          </div>
        </div>

        <aside className="about-hero-meta">
          <h3>Why Farmers & Dealers Choose Us</h3>
          <ul>
            <li>Market understanding in Karnataka</li>
            <li>Fast product guidance and requirement matching</li>
            <li>WhatsApp-first communication for quick follow-up</li>
          </ul>
          <div className="about-hero-actions">
            <Link to="/contact" className="about-btn about-btn-primary">Talk to Team</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="about-btn about-btn-whatsapp">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </aside>
      </motion.header>

      <motion.div className="about-stat-grid" {...revealUp}>
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.label} className="about-stat-card">
              <div className="about-stat-icon">
                <Icon size={18} />
              </div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          );
        })}
      </motion.div>

      <div className="about-detail-grid carousel-mobile">
        <motion.article className="about-detail-card" {...revealUp}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1.5rem' }}>
            <div>
              <h2>Company Profile</h2>
              <p>
                {companyInfo.legalName} is a {companyInfo.businessType.toLowerCase()} focused on fertilizers,
                organic manure, and PGPs.
              </p>
            </div>
            <img src={mascotImg} alt="Bhoomiputra Mascot" style={{ width: '80px', height: 'auto', borderRadius: '0.5rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))' }} />
          </div>
          <div className="about-address-block">
            <h4>Office</h4>
            <p>{companyInfo.addressLines.join(', ')}</p>
          </div>
        </motion.article>

        <motion.article className="about-detail-card about-snapshot" {...revealUp}>
          <h2>Snapshot</h2>
          <ul>
            {snapshotItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text}>
                  <Icon size={14} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>
        </motion.article>
      </div>

      <motion.div className="about-cta-strip" {...revealUp}>
        <div>
          <h3>Need product recommendation for your crop plan?</h3>
          <p>Share your location and requirement. Our team will connect with the best available options.</p>
        </div>
        <div className="about-hero-actions">
          <Link to="/products" className="about-btn about-btn-primary">
            <Sprout size={16} /> Explore Products
          </Link>
          <Link to="/contact" className="about-btn about-btn-outline">Get Quote</Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
