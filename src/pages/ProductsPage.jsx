import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const ProductsPage = () => {
  return (
    <section className="section page-section">
      <h1 className="page-title">Our Products</h1>
      <p className="page-subtitle">
        Incitec Industries supplies Organic Manure, Fertilizer, and PGPs for Karnataka-region agriculture.
      </p>

      <ProductGrid items={products} />

      <div style={{ marginTop: '5rem', background: 'linear-gradient(145deg, #1e3c1a 0%, #0d1e0a 100%)', borderRadius: '1.5rem', padding: '3.5rem 2.5rem', color: '#fff', boxShadow: '0 20px 40px rgba(26, 61, 24, 0.25)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '150%', height: '150%', background: 'radial-gradient(circle, rgba(211,84,0,0.15) 0%, rgba(0,0,0,0) 60%)', pointerEvents: 'none' }}></div>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h3 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '2rem', letterSpacing: '-0.02em', fontFamily: 'Outfit, sans-serif' }}>Additional Available Lines</h3>
          <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', padding: 0 }}>
            <li style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.02em', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
              <span style={{ display: 'inline-flex', width: '12px', height: '12px', background: '#d35400', borderRadius: '50%', boxShadow: '0 0 10px rgba(211,84,0,0.6)' }} />
              Organic Manure and Fertilizer
            </li>
            <li style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.02em', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
              <span style={{ display: 'inline-flex', width: '12px', height: '12px', background: '#4a8c42', borderRadius: '50%', boxShadow: '0 0 10px rgba(74,140,66,0.6)' }} />
              Plant Growth Promoters (PGP)
            </li>
            <li style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.15rem', fontWeight: 700, letterSpacing: '0.02em', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
              <span style={{ display: 'inline-flex', width: '12px', height: '12px', background: '#2980b9', borderRadius: '50%', boxShadow: '0 0 10px rgba(41,128,185,0.6)' }} />
              Agriculture Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
