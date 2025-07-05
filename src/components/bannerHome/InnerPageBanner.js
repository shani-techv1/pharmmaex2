import React from 'react';

const InnerPageBanner = ({ pageName, bgImage }) => {
  return (
    <section className="innerpage-banner-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="innerpage-banner-overlay"></div>
      <div className="container innerpage-banner-content">
        <h1 className="innerpage-banner-title">{pageName}</h1>
        <div className="innerpage-banner-breadcrumb">
          Home <span className="innerpage-banner-breadcrumb-sep">/</span> <span className="innerpage-banner-breadcrumb-active">{pageName}</span>
        </div>
      </div>
    </section>
  );
};

export default InnerPageBanner; 