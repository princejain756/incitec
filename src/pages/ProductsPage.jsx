import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';

const ProductsPage = () => {
  return (
    <section className="section page-section">
      <h1 className="page-title">Our Products</h1>
      <p className="page-subtitle">
        Incitec Industries supplies NPK mixtures, PGRs, fertilizers, and related crop support products for Karnataka-region agriculture.
      </p>

      <ProductGrid items={products} />

      <div className="values-card" style={{ marginTop: '3rem' }}>
        <h3>Additional Available Lines</h3>
        <ul className="values-list">
          <li><span className="dot" />All NPK Mixture Fertilizers</li>
          <li><span className="dot" />Plant Growth Regulators (PGR)</li>
          <li><span className="dot" />Herbicide and weed control products</li>
          <li><span className="dot" />Related agricultural distribution support</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;
