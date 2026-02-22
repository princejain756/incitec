import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  MapPin,
  Clock,
  Award,
  BadgeCheck,
  Quote
} from 'lucide-react';
import ScrollSequence from '../components/ScrollSequence';
import { companyInfo } from '../data/company';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';

const revealUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  viewport: { once: true, amount: 0.15 }
};

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: 'Reliable Quality',
    desc: 'All NPK mixtures and PGR solutions are sourced from vetted, high-standard manufacturers.',
    color: '#2d5a27'
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    desc: 'Deeply rooted in Karnataka, understanding specific soil and crop needs of the region.',
    color: '#1a6b5a'
  },
  {
    icon: Clock,
    title: 'Fast Support',
    desc: 'Quick turnaround on queries via WhatsApp for pricing and availability.',
    color: '#d35400'
  },
  {
    icon: Award,
    title: 'Certified Distributor',
    desc: `Registered & compliant. GSTIN: ${companyInfo.gstNumber}`,
    color: '#7b4f12'
  }
];

const testimonials = [
  {
    quote: "Incitec has been our primary source for PGRs for two seasons now. Their technical guidance on mixture application is unmatched in Karnataka.",
    author: "Rajesh K.",
    role: "Commercial Farmer",
    initial: "R"
  },
  {
    quote: "Stock availability is never an issue. When they say a product is available, it's there. Very professional distribution.",
    author: "Suresh Patil",
    role: "Agri-Retailer",
    initial: "S"
  },
  {
    quote: "The direct WhatsApp communication saves us hours of wait. Pricing is transparent and competitive for bulk orders.",
    author: "Mehul Shah",
    role: "Farm Consultant",
    initial: "M"
  }
];

const HomePage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroTitle = useTransform(
    heroScrollProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25],
    [
      companyInfo.legalName,
      'All NPK Mixtures',
      'PGR Solutions',
      'Herbicides & Weed Control',
      'Karnataka Distributor',
      'Connect with Earth'
    ]
  );

  const heroSubtitle = useTransform(
    heroScrollProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25],
    [
      'Wholesaler and distributor based in Karnataka',
      companyInfo.tagline,
      'Reliable plant growth regulator supply for local agriculture',
      'Supporting farms with herbicide and weed control products',
      'Serving Karnataka with practical agri inputs',
      'Incitec Industries: Your partner in sustainable agriculture'
    ]
  );

  const contentOpacity = useTransform(heroScrollProgress, [0, 0.22, 0.28, 1], [1, 1, 0, 0]);
  const scale = useTransform(heroScrollProgress, [0, 0.28], [1, 1.05]);

  return (
    <>
      <div className="hero" ref={heroRef}>
        <div className="hero-bg-overlay"></div>
        <ScrollSequence framesCount={145} path="/frames" checkpointFrame={66} />
        <motion.div
          className="hero-overlay"
          style={{
            opacity: contentOpacity,
            scale,
            pointerEvents: 'none'
          }}
        >
          <motion.h1 className="hero-title">{heroTitle}</motion.h1>
          <motion.p className="hero-subtitle">{heroSubtitle}</motion.p>
        </motion.div>
      </div>

      {/* ── Products ── */}
      <section className="section">
        <h2 style={{ fontSize: '3.2rem', textAlign: 'center', marginBottom: '1rem', letterSpacing: '-0.03em' }}>Our Products</h2>
        <p style={{ textAlign: 'center', color: '#444', maxWidth: '680px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
          Explore our product range for fertilizers, NPK mixtures, PGRs, and crop support inputs.
        </p>
        <ProductGrid items={products} />
        <div style={{ marginTop: '2.2rem', display: 'flex', justifyContent: 'center' }}>
          <Link to="/products" className="primary-link-btn">View All Products</Link>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ background: 'linear-gradient(160deg, #f4f9f4 0%, #e8f2e8 100%)', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
          <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} {...revealUp}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(45,90,39,0.1)',
              color: '#2d5a27',
              padding: '0.3rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Why Choose Us</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: '0.8rem' }}>
              Built on Trust. Rooted in Karnataka.
            </h2>
            <p style={{ color: '#4d5a54', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              We're not just a distributor — we're your local agriculture partner.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem'
          }}>
            {trustFeatures.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, boxShadow: '0 24px 48px rgba(0,0,0,0.1)' }}
                  style={{
                    background: '#fff',
                    borderRadius: '1.4rem',
                    padding: '2.2rem',
                    border: '1px solid #e4ede4',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                    cursor: 'default',
                    transition: 'box-shadow 0.3s ease'
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '1rem',
                    background: `${feature.color}18`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.4rem',
                    color: feature.color
                  }}>
                    <Icon size={26} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.7rem', letterSpacing: '-0.01em', color: '#111' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#5a6b62', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Leadership Message ── */}
      <section style={{ padding: '6rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div
            {...revealUp}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.6fr)',
              gap: '4rem',
              alignItems: 'center',
              background: 'linear-gradient(145deg, #f9fcf8 0%, #edf5ec 100%)',
              border: '1px solid #d8e8d8',
              borderRadius: '2rem',
              padding: '3.5rem',
              boxShadow: '0 24px 48px rgba(45,90,39,0.07)'
            }}
          >
            {/* Left: visual badge */}
            <div style={{
              background: 'linear-gradient(145deg, #2d5a27 0%, #1a3d18 100%)',
              borderRadius: '1.5rem',
              padding: '3rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.2rem',
              minHeight: '280px',
              boxShadow: '0 20px 40px rgba(45,90,39,0.3)'
            }}>
              <BadgeCheck size={64} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                  Authorized Distributor
                </p>
                <p style={{ color: '#fff', fontWeight: 800, fontSize: '1.1rem' }}>
                  {companyInfo.legalName}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '0.4rem' }}>
                  Est. {companyInfo.gstRegistrationDate}
                </p>
              </div>
            </div>

            {/* Right: message */}
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(45,90,39,0.1)',
                color: '#2d5a27',
                padding: '0.3rem 0.9rem',
                borderRadius: '999px',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.2rem'
              }}>A Message From Leadership</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.02em', marginBottom: '1.4rem', lineHeight: 1.2 }}>
                Bridging Science &amp; Soil
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.75,
                color: '#3e4d44',
                marginBottom: '2rem',
                fontStyle: 'italic',
                borderLeft: '3px solid #2d5a27',
                paddingLeft: '1.2rem'
              }}>
                "At Incitec Industries, we believe that the right input at the right time is the difference between a harvest and a success. Our focus in Karnataka has always been to simplify the procurement of high-quality NPK mixtures and PGRs for our local farming community."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #2d5a27, #4a8c42)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 800,
                  fontSize: '1.1rem'
                }}>
                  {companyInfo.ceo[0]}
                </div>
                <div>
                  <p style={{ fontWeight: 800, fontSize: '1rem', color: '#111' }}>{companyInfo.ceo}</p>
                  <p style={{ fontSize: '0.85rem', color: '#6b7a72' }}>CEO, {companyInfo.legalName}</p>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/about" className="about-btn about-btn-primary">Read Our Story</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: '6rem 2rem', background: 'linear-gradient(180deg, #fff 0%, #f4f9f4 100%)' }}>
        <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
          <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }} {...revealUp}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(45,90,39,0.1)',
              color: '#2d5a27',
              padding: '0.3rem 0.9rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>Social Proof</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em' }}>
              Trusted by Local Agriculture
            </h2>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{
                  background: '#fff',
                  borderRadius: '1.4rem',
                  padding: '2.2rem',
                  border: '1px solid #e4ede4',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <Quote size={28} color="#2d5a27" style={{ opacity: 0.15 }} />
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: '#2c3e50',
                  fontStyle: 'italic',
                  flex: 1
                }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', borderTop: '1px solid #eef2ee', paddingTop: '1.2rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2d5a27, #4a8c42)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    flexShrink: 0
                  }}>
                    {t.initial}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.95rem', color: '#111', margin: 0 }}>{t.author}</p>
                    <p style={{ fontSize: '0.82rem', color: '#6b7a72', margin: 0 }}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Welcome / Quick Links ── */}
      <section className="section home-summary home-summary-after-products">
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>Welcome to Incitec Industries</h2>
        <p style={{ textAlign: 'center', color: '#333', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.15rem', fontWeight: 400 }}>
          {companyInfo.description}
        </p>
        <div className="quick-links">
          <Link to="/products" className="quick-link-card">
            <h3>Products</h3>
            <p>NPK mixtures, PGRs, fertilizers and crop support products.</p>
          </Link>
          <Link to="/about" className="quick-link-card">
            <h3>About</h3>
            <p>Business profile, leadership, GST details and local focus.</p>
          </Link>
          <Link to="/contact" className="quick-link-card">
            <h3>Contact</h3>
            <p>Phone, WhatsApp, address and social media details.</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
