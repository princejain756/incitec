import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, FlaskConical, Sprout, Database, Wheat } from 'lucide-react';

const iconMap = {
  leaf: Leaf,
  droplets: Droplets,
  flask: FlaskConical,
  sprout: Sprout,
  database: Database,
  wheat: Wheat
};

const ProductGrid = ({ items }) => {
  return (
    <div className="grid">
      {items.map((product, idx) => {
        const Icon = iconMap[product.icon] || Leaf;

        return (
          <motion.div
            key={product.name}
            className="product-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            viewport={{ once: true }}
          >
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-content">
              <div style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>
                <Icon className="w-8 h-8" />
              </div>
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-desc">{product.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
