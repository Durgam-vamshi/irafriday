import React from 'react';
function FloorPlansHeader() {
    return (
        <div className="floorplans-header" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem'
        }}>
            <div className = "mobile-viewss">
            <p className="fp-heading text-dark"> Spacious by Design. Smart by Default.</p>
            <p className="fp-subheading">Choose from East &amp; West-facing villas:</p>
            <button className="fp-download" style={{ width: '40vw' }}>Download Floor Plans</button>
        </div>
        </div>
    );
}

export default FloorPlansHeader;



