import React from 'react';
import "../styles/AboutIraReality.css";

function AboutIraRealty() {
    return (
        <section className="about-section">
            <div className="about-container">

                <div className="about-images">
                    <img src="https://urbanranch.irarealty.in/_next/static/media/aboutimg1.9c6811d2.webp" alt="Project 1" className='first' />
                    <img src="https://urbanranch.irarealty.in/_next/static/media/aboutimg2.5ddb16f7.webp" alt="Project 2" className='second' />
                    <img src="https://urbanranch.irarealty.in/_next/static/media/aboutimg3.38199b5f.webp" alt="Project 3" className='third' />
                </div>

                <div className="about-content">
                    <div>
                        <div>
                            <span className="about-tag">About IRA Realty</span>
                        </div>
                        <h2 className="about-title">Building Homes. Nurturing Communities.</h2>
                        <p className="about-desc">
                            At IRA Realty, we're redefining real estate with transparency, trust, and transformative design.
                        </p>
                    </div>
                    
                    <div className="about-projects">
                        <h4 className="landmark-heading">Our Landmark Projects:</h4>
                        <div className="project-list">

                            <div className="project-item">
                                <div className="project-icon-wrapper">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Location_On">
                                            <g>
                                                <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
                                                <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>
                                    <span className='Location-Ira'>IRA The Square Villas — </span> <span className='Location-specs'>Kongarakalan</span></span>
                            </div>
                            <div className="project-item">
                                <div className="project-icon-wrapper">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Location_On">
                                            <g>
                                                <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
                                                <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>
                                    <span className='Location-Ira'>Moonglade Apartments — </span>
                                    <span className='Location-specs'>Narsingi</span>
                                </span>
                            </div>

                            <div className="project-item">
                                <div className="project-icon-wrapper">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Location_On">
                                            <g>
                                                <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z" />
                                                <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>
                                    <span className='Location-Ira'>IRA Elevate Villas — </span>
                                    <span className='Location-specs'> Shamshabad</span>
                                </span>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </section>
    );
}

export default AboutIraRealty;
































