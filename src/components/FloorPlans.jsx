import React from 'react';
import '../styles/FloorPlans.css';
import FloorPlansHeader from './FloorPlansHeader';
import FloorPlansSlider from './FloorPlansSlider';

function FloorPlans() {
    return (
        <section className="floorplans-section" id="floor-plans">
            <img
                src="https://urbanranch.irarealty.in/_next/static/media/decor.0ff08ab1.png"
                alt="Decoration"
                className="decor-img"
            />
            <div className="container">
                <FloorPlansHeader />
                <FloorPlansSlider />
            </div>
        </section>
    );
}

export default FloorPlans;



