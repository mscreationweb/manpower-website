import React from 'react';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const logos = [
    { image: require('./../../images/All manpower img/clients/1.jpg') },
    { image: require('./../../images/All manpower img/clients/2.jpg') },
    { image: require('./../../images/All manpower img/clients/3.jpg') },
    { image: require('./../../images/All manpower img/clients/4.jpg') },
    { image: require('./../../images/All manpower img/clients/5.jpg') },
    { image: require('./../../images/All manpower img/clients/6.jpg') },
    { image: require('./../../images/All manpower img/clients/7.jpg') },
    { image: require('./../../images/All manpower img/clients/8.jpg') },
    { image: require('./../../images/All manpower img/clients/9.jpg') },
    { image: require('./../../images/All manpower img/clients/10.jpg') },
    { image: require('./../../images/All manpower img/clients/11.jpg') },
    { image: require('./../../images/All manpower img/clients/12.jpg') },
    { image: require('./../../images/All manpower img/clients/13.jpg') },
    { image: require('./../../images/All manpower img/clients/14.jpg') },
    { image: require('./../../images/All manpower img/clients/15.jpg') },
    { image: require('./../../images/All manpower img/clients/16.jpg') },
    { image: require('./../../images/All manpower img/clients/17.jpg') },
    { image: require('./../../images/All manpower img/clients/19.jpg') },
    { image: require('./../../images/All manpower img/clients/20.jpg') },
    { image: require('./../../images/All manpower img/clients/21.jpg') },
    { image: require('./../../images/All manpower img/clients/22.jpg') },
    { image: require('./../../images/All manpower img/clients/23.jpg') },
    { image: require('./../../images/All manpower img/clients/24.jpg') },
    { image: require('./../../images/All manpower img/clients/25.jpg') },
    { image: require('./../../images/All manpower img/clients/26.jpg') },
    { image: require('./../../images/All manpower img/clients/27.jpg') },
    { image: require('./../../images/All manpower img/clients/28.jpg') },
    { image: require('./../../images/All manpower img/clients/29.jpg') },
    { image: require('./../../images/All manpower img/clients/30.jpg') },
    { image: require('./../../images/All manpower img/clients/31.jpg') },
    { image: require('./../../images/All manpower img/clients/32.jpg') },
   
    // { image: require('./../../images/client-logo/w6.png') },
    
]

class ClientsLogo extends React.Component {
    render() {
        const options = {
            loop:true,
            margin:0,
            autoplay:true,
            nav:false,
            dots: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:3
                },
                480:{
                    items:3
                },			
                767:{
                    items:4
                },
                1000:{
                    items:6
                }
            }
        };
        return (
            <>
                <div className="section-full p-t10 bg-white ">
                    <div className="container">
                        <div className="section-content">
                            {/* TESTIMONIAL 4 START ON BACKGROUND */}
                            <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Our </span> Clients</h2>
                                </div>
                            </div>
                        </div>
                            <div className="section-content">
                                <div className="section-content p-tb10 owl-btn-vertical-center" style={{backgroundColor:'lightgray',marginBottom:"10px"}}>
                                    <OwlCarousel className="owl-carousel home-client-carousel-2" {...options} >
                                        {logos.map((item, index) => (
                                            <div className="item" key={index} style={{marginTop:"10px",marginBottom:'-10px'}}>
                                                <div className="ow-client-logo">
                                                    <div className="client-logo client-logo-media">
                                                    <NavLink to={"#"} ><img src={item.image} alt="" /></NavLink></div>
                                                </div>
                                            </div>
                                        ))}
                                    </OwlCarousel>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default ClientsLogo;