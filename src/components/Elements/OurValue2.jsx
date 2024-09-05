import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const img1 = require('./../../images/All manpower img/Image.webp');


const OurValue2 = () => {
   

   

   
   
   

    return (
        <>
            <div className="section-full p-t80 p-b50 bg-white mobile-page-padding">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-7 col-sm-6">
                                <div className="video-section-full-v2">
                                    <div className="video-section-full bg-no-repeat bg-cover overlay-wraper m-b30" style={{ backgroundImage: `url(${img1}) `}}>
                                        <div className="overlay-main bg-black opacity-04" />
                                        <div className="video-section-inner">
                                            <div className="video-section-content">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6" >
                                <div className="video-part-2" style={{marginTop:'50px'}}>
                                    <h3 className="font-weight-800" style={{textAlign:'start'}}>Our Innovative <br/><span  style={{ color: '#026EB6' }}>Workforce Solutions </span> </h3>
                                    <p style={{textAlign:'justify',textJustify:'inter-word'}}>Fastest Service General Contracting Est., has the honor to introduce ourselves as one of the establishment dealing in variety of services with excellence, top most listed companies in Saudi Arabia having professionally managed multi -directional activities in the field of industrial services as well as general medium type of services along with skilled and professional manpower supply. We are very well managed and committed company with the goal of total customer satisfaction.</p>
                                    {/* <ul className="list-angle-right anchor-line">
                                        <li>Innovative Digital Strategies</li>
                                        <li>Expertise in Brand Transformation</li>
                                        <li>Strategic Audience Connection</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            
        </>
    );
};

export default OurValue2;
