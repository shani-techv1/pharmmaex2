import React, { useState } from 'react';
import gstyles from './ExhibitionGallery.module.css';

const GalleryGrid = ({ images = [] }) => {
  const [page, setPage] = useState(1);
  const imagesPerPage = 16;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIdx = (page - 1) * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const currentImages = images.slice(startIdx, endIdx);

 
  React.useEffect(() => {
    setPage(1);
  }, [images]);

  return (
        <>
      {/* Gallery Grid */}
      <div className={gstyles.galleryGrid} style={{ gridTemplateColumns: `repeat(4, 1fr)`, width: '80%' }}>
        {currentImages.map((img, idx) => (
          <div className={gstyles.galleryItem} key={startIdx + idx}>
            <img loading='lazy' src={img} alt={`Exhibition ${startIdx + idx + 1}`} className={gstyles.galleryImg} />
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 24, gap: 8 }}>
          {/* Prev Arrow */}
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '2px solid',
              background: '#fff',
              color: '#444444',
              fontSize: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: page === 1 ? 'not-allowed' : 'pointer',
              opacity: page === 1 ? 0.5 : 1,
              transition: 'background 0.2s',
            }}
            aria-label="Previous page"
          >
            &#8592;
          </button>
          {/* Page Numbers */}
          {(() => {
            const pages = [];
            if (totalPages <= 6) {
              for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
              }
            } else {
              if (page <= 3) {
                pages.push(1, 2, 3, 4, 5, '.....', totalPages);
              } else if (page >= totalPages - 2) {
                pages.push(1, '.....', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
              } else {
                pages.push(1, '.....', page - 1, page, page + 1, '.....', totalPages);
              }
            }
            return pages.map((p, idx) => {
              if (p === '.....') {
                return <span key={"ellipsis-"+idx} style={{ padding: '0 8px', color: '#888', fontSize: 18 }}>. . . . .</span>;
              }
              const isActive = p === page;
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  disabled={isActive}
                  style={{
                    color: isActive ? '#009688' : '#222',
                    background: 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                    fontSize: 18,
                    border: 'none',
                    borderBottom: isActive ? '3px solid #b2dfdb' : 'none',
                    padding: '0 12px',
                    lineHeight: '36px',
                    textDecoration: 'none',
                    margin: '0 2px',
                    cursor: isActive ? 'default' : 'pointer',
                    outline: 'none',
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {p}
                </button>
              );
            });
          })()}
          {/* Next Arrow */}
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%' ,
              border: '2px solid' ,
              background: '#fff',
              color: '#444444',
              fontSize: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: page === totalPages ? 'not-allowed' : 'pointer',
              opacity: page === totalPages ? 0.5 : 1,
              transition: 'background 0.2s',
            }}
            aria-label="Next page"
          >
            &#8594;
          </button>
        </div>
      )}
      </>
  );
};

export default GalleryGrid; 