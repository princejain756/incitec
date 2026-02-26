import React from 'react';
import { motion } from 'framer-motion';
import mascotImg from '../assets/logo/mascot.webp';

const MascotFloater = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="mascot-floater hide-on-mobile"
            style={{
                position: 'fixed',
                bottom: '2rem',
                left: '2rem',
                zIndex: 1100,
                width: '80px',
                height: 'auto',
                cursor: 'pointer',
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))',
            }}
            onClick={() => {
                // Optional: link to about page or just a subtle interaction
                window.location.href = '/about';
            }}
        >
            <img
                src={mascotImg}
                alt="Incitec Mascot"
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                }}
            />
            <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                background: 'var(--primary)',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: 800,
                padding: '2px 6px',
                borderRadius: '999px',
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                whiteSpace: 'nowrap'
            }}>
                20 Years
            </div>
        </motion.div>
    );
};

export default MascotFloater;
