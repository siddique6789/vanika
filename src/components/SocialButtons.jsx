import React from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const SocialButtons = () => {
  return (
    <>
      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/vanika_hair_protection"
        target="_blank"
        rel="noopener noreferrer"
        title="Follow us on Instagram"
        style={{
          position: 'fixed',
          bottom: '70px', // ⬆️ Positioned above WhatsApp
          right: '20px',
          backgroundColor: '#E4405F', // Instagram brand color
          color: 'white',
          borderRadius: '50%',
          padding: '6px',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaInstagram size={28} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919961147468" // ✅ Replace with your actual number
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          padding: '6px',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaWhatsapp size={28} />
      </a>
    </>
  );
};

export default SocialButtons;
