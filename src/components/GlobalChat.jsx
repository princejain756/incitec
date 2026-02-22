import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, Send } from 'lucide-react';
import { companyInfo } from '../data/company';

const GlobalChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappNumber = companyInfo.whatsapp.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="global-chat-wrapper">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        style={{
                            position: 'absolute',
                            bottom: '4.5rem',
                            right: 0,
                            width: '320px',
                            background: 'white',
                            borderRadius: '1.5rem',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                            overflow: 'hidden',
                            border: '1px solid #eee'
                        }}
                    >
                        <div style={{ backgroundColor: 'var(--primary)', padding: '1.2rem', color: 'white' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Incitec Support</h4>
                                    <p style={{ margin: 0, fontSize: '0.8rem', opacity: 0.8 }}>Typically replies in minutes</p>
                                </div>
                                <X size={20} style={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', background: '#f8fcf8' }}>
                            <p style={{ fontSize: '0.9rem', color: '#444', marginBottom: '1.2rem' }}>
                                👋 Hello! How can we help you today with fertilizers, NPK mixtures, or PGR solutions?
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.7rem',
                                        background: '#25d366',
                                        color: 'white',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '0.8rem',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <MessageCircle size={18} /> Chat on WhatsApp
                                </a>

                                <a
                                    href={`tel:${companyInfo.phones[0]}`}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.7rem',
                                        background: 'white',
                                        color: 'var(--primary)',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '0.8rem',
                                        textDecoration: 'none',
                                        border: '1px solid #dce7dd',
                                        fontWeight: 600,
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    <Phone size={18} /> Call us Directly
                                </a>
                            </div>
                        </div>

                        <div style={{ padding: '1rem', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '0.5rem' }}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                style={{
                                    flex: 1,
                                    border: 'none',
                                    background: '#f0f4f0',
                                    padding: '0.6rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.85rem',
                                    outline: 'none'
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') window.open(whatsappUrl, '_blank');
                                }}
                            />
                            <button
                                onClick={() => window.open(whatsappUrl, '_blank')}
                                style={{
                                    background: 'var(--primary)',
                                    color: 'white',
                                    border: 'none',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <Send size={16} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '30px',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 30px rgba(45, 90, 39, 0.4)',
                    cursor: 'pointer'
                }}
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </motion.button>
        </div>
    );
};

export default GlobalChat;
