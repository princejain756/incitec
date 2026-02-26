import React, { useMemo, useState } from 'react';
import { MessageCircle, PhoneCall, MapPin, Facebook, Instagram } from 'lucide-react';
import { companyInfo } from '../data/company';

const ContactPage = () => {
  const [leadForm, setLeadForm] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: ''
  });

  const whatsappNumber = companyInfo.whatsapp.replace(/\D/g, '');

  const whatsappMessage = useMemo(() => {
    const lines = [
      'Hello Incitec Industries, I am interested in your products.',
      `Name: ${leadForm.name || '-'}`,
      `Phone: ${leadForm.phone || '-'}`,
      `Location: ${leadForm.location || '-'}`,
      `Requirement: ${leadForm.requirement || '-'}`
    ];

    return lines.join('\n');
  }, [leadForm]);

  const whatsappLeadUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setLeadForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section page-section">
      <h1 className="page-title">Contact {companyInfo.legalName}</h1>
      <p className="page-subtitle">
        Fastest response on WhatsApp. Share your requirement and get a callback from our Karnataka team.
      </p>


      <div className="lead-layout">
        <article className="contact-card lead-form-card">
          <h3>Quick Inquiry</h3>
          <p className="footer-note">Fill details and send directly on WhatsApp.</p>

          <div className="lead-form-grid">
            <label className="lead-field">
              <span>Name</span>
              <input name="name" value={leadForm.name} onChange={onFormChange} placeholder="Your name" />
            </label>
            <label className="lead-field">
              <span>Phone</span>
              <input name="phone" value={leadForm.phone} onChange={onFormChange} placeholder="Your mobile number" />
            </label>
            <label className="lead-field">
              <span>Location</span>
              <input name="location" value={leadForm.location} onChange={onFormChange} placeholder="Village / City" />
            </label>
            <label className="lead-field lead-field-wide">
              <span>Requirement</span>
              <textarea
                name="requirement"
                value={leadForm.requirement}
                onChange={onFormChange}
                rows={4}
                placeholder="Example: NPK mixture 1 ton, PGR for sugarcane"
              />
            </label>
          </div>

          <div className="lead-actions" style={{ marginTop: '1rem' }}>
            <a className="cta-button cta-whatsapp" href={whatsappLeadUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> Send Inquiry on WhatsApp
            </a>
            <a className="cta-button cta-call" href={`tel:${companyInfo.phones[0].replace(/\D/g, '')}`}>
              <PhoneCall size={18} /> Call Primary
            </a>
          </div>
        </article>

        <article className="contact-card contact-map-card">
          <h3><MapPin size={18} style={{ marginRight: 8 }} /> Office Location</h3>
          <p>{companyInfo.addressLines.join(', ')}</p>
          <div className="map-wrap">
            <iframe
              title="Incitec Industries Location"
              src={companyInfo.mapEmbedUrl}
              className="map-frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a className="footer-link" href={companyInfo.mapDirectionsUrl} target="_blank" rel="noreferrer">
            Open in Google Maps
          </a>
        </article>
      </div>

      <div className="contact-grid carousel-mobile" style={{ marginTop: '1.4rem' }}>
        <article className="contact-card">
          <h3>Contact Info</h3>
          <p><a className="footer-link" href={`tel:${companyInfo.phones[0].replace(/\D/g, '')}`}>Primary: {companyInfo.phones[0]}</a></p>
          <p><a className="footer-link" href={whatsappLeadUrl} target="_blank" rel="noreferrer">WhatsApp: {companyInfo.whatsapp}</a></p>
          <p className="footer-note">Service Area: {companyInfo.serviceArea}</p>
        </article>

        <article className="contact-card">
          <h3>Social & Web</h3>
          <p><a className="footer-link" href={companyInfo.facebookUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem' }}><Facebook size={16} /> Facebook Page</a></p>
          <p><a className="footer-link notranslate" href={companyInfo.instagramUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Instagram size={16} /> Instagram</a></p>
          <p className="footer-note" style={{ marginTop: '0.8rem' }}>{companyInfo.emailNote}</p>
        </article>
      </div>

    </section>
  );
};

export default ContactPage;
