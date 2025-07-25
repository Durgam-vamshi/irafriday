import React from 'react';
import "../styles/SmartLiving.css"

const fanIcon = "https://urbanranch.irarealty.in/_next/static/media/fan.6aac0760.png";
const smartLockIcon = "https://urbanranch.irarealty.in/_next/static/media/smartlock.e2618a50.png"
const voiceAssistantIcon = "https://urbanranch.irarealty.in/_next/static/media/voice_assistant.7ed72c06.png";
const remoteAccessIcon = "https://urbanranch.irarealty.in/_next/static/media/remote_access.c8138cf2.png";
const wiringIcon = "https://urbanranch.irarealty.in/_next/static/media/wiring.c14e819e.png"
const mainImage = "https://urbanranch.irarealty.in/_next/static/media/C4_Westfacingwithclub.897c071d.webp";

const SmartLiving = () => {
    return (
        <div className="py-4 bg-white" id="smart-living">
            <div className="container smartLiving-container">
                <div className="smartLiving">
                    <h5 className="Heading">Smart Living, Without Lifting A Finger</h5>
                    <p className="smartliving_p">
                        Your villa at <span className='BolderSmart'>IRA Urban Ranch comes </span>fully pre-fitted with <span className='BolderSmart'>complete home automation</span> -
                        <br className="hidden md:block" />designed to make everyday life smoother, safer, and more intuitive for your family.
                    </p>


                    <div className="flex-col-lg-row">
                        <div className="w-full-lg-5-12">
                            <div className="grid-cols-2-lg-1">

                                <div className="smartliving_icon_container">
                                    <div>
                                        <div className="smartliving_icon">
                                            <img alt="App-Controlled Lighting & Fan Automation" loading="lazy" width="48" height="42" decoding="async" src={fanIcon} className="rounded" />
                                        </div>
                                    </div>
                                    <p className="smartliving_icon_name">
                                        App-Controlled Lighting <br /> &amp; Fan Automation
                                    </p>
                                </div>
                                <div className="smartliving_icon_container">
                                    <div>
                                        <div className="smartliving_icon">
                                            <img alt="Smart Door Locks & Entry Alerts" loading="lazy" width="32" height="42" decoding="async" src={smartLockIcon} className="rounded" />
                                        </div>
                                    </div>
                                    <p className="smartliving_icon_name">
                                        Smart Door Locks <br /> &amp; Entry Alerts
                                    </p>
                                </div>
                                <div className="smartliving_icon_container">
                                    <div>
                                        <div className="smartliving_icon">
                                            <img alt="Voice Assistant Compatibility (Alexa/Google)" loading="lazy" width="30" height="50" decoding="async" src={voiceAssistantIcon} className="rounded" />
                                        </div>
                                    </div>
                                    <p className="smartliving_icon_name">
                                        Voice Assistant Compatibility <br /> (Alexa/Google)
                                    </p>
                                </div>
                                <div className="smartliving_icon_container">
                                    <div>
                                        <div className="smartliving_icon">
                                            <img alt="Remote-Access for Appliances & Devices" loading="lazy" width="42" height="42" decoding="async" src={remoteAccessIcon} className="rounded" />
                                        </div>
                                    </div>
                                    <p className="smartliving_icon_name">
                                        Remote-Access for <br /> Appliances &amp; Devices
                                    </p>
                                </div>
                                <div className="smartliving_icon_container">
                                    <div>
                                        <div className="smartliving_icon">
                                            <img alt="Future-Ready Automation Wiring Throughout" loading="lazy" width="42" height="42" decoding="async" src={wiringIcon} className="rounded" />
                                        </div>
                                    </div>
                                    <p className="smartliving_icon_name">
                                        Future-Ready Automation <br /> Wiring Throughout
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="w-full-lg-7-12">
                            <img
                                alt="Smart Living"
                                loading="lazy"
                                width="722"
                                height="619"
                                decoding="async"
                                className="img-fluid rounded shadow w-full mobile-image-adjust"
                                src={mainImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SmartLiving;
