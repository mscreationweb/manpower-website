import React from 'react';
import { NavLink } from 'react-router-dom';

var bnr1 = require('./../../images/background/bg-6.png');

class Specialization3 extends React.Component {
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50  mobile-page-padding" style={{backgroundImage:"url(" + bnr1 + ")",backgroundColor:'#026EB6'}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            {/* <div className="section-head m-b50 text-white text-center">
                                <h3 className="m-t0">We are all constructed out of our self dialogue.</h3>
                                <p>Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy
              nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                            </div> */}
                            <div className="section-full p-t10 p-b10 inner-page-padding">
                        <div className="container">
                            <div className="faq-1 bg-gray  p-a50">
                                {/* TITLE START */}
                                <div className="section-head">
                                    <div className="mt-separator-outer separator-center">
                                        <div className="mt-separator">
                                            <h2 className="text-uppercase sep-line-one ">Why  <span style={{color:'#026EB6'}}> Choose Us</span> </h2>
                                        </div>
                                    </div>
                                </div>
                                {/* TITLE END */}
                                {/* Accordian */}
                                <div className="mt-accordion acc-bg-white" id="accordion5">
                                    <div className="panel mt-panel">
                                        <div className="acod-head acc-actives">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseOne5" data-parent="#accordion5">
                                                Expertise & Experience
                  <span className="indicator"><i className="fa fa-plus" style={{color:"#026EB6"}} /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne5" className="acod-body collapse in">
                                            <div className="acod-content p-tb15">
                                            <p>With years of experience in the manpower supply industry, our team understands the nuances of various sectors and can deliver customized solutions that drive success.                                            </p>
              </div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseTwo5" className="collapsed" data-parent="#accordion5">
                                                Wide Talent Pool
                  <span className="indicator"><i className="fa fa-plus" style={{color:"#026EB6"}} /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>Our extensive network of skilled professionals ensures that we can provide the right talent quickly and efficiently, no matter the industry or job requirement.  </p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseThree5" className="collapsed" data-parent="#accordion5">
                                                Client-Centric Approach
                  <span className="indicator"><i className="fa fa-plus" style={{color:"#026EB6"}}  /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>We prioritize your needs and work closely with you to understand your business objectives. Our goal is to provide solutions that align with your strategic goals and help you achieve your vision.
                                            </p></div>
                                        </div>
                                    </div>
                                    <div className="panel mt-panel">
                                        <div className="acod-head">
                                            <h4 className="acod-title">
                                                <a data-toggle="collapse" href="#collapseFour5" className="collapsed" data-parent="#accordion5">
                                                Quality & Compliance

                  <span className="indicator"><i className="fa fa-plus" style={{color:"#026EB6"}} /></span>
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseFour5" className="acod-body collapse">
                                            <div className="acod-content p-tb15"><p>We adhere to strict quality standards and compliance regulations to ensure that all our candidates meet the highest industry standards. Your peace of mind is our priority.</p></div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>



                            {/* <div className="row">
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/1.jpg')}  alt=""/>
                                        <div className="figcaption">
                                            <h4>Concept and Design</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/2.jpg')} alt="" />
                                        <div className="figcaption">
                                            <h4>Refurbishment</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12 m-b30">
                                    <div className="image-effect-one hover-shadow">
                                        <img src={require('../../images/services/3.jpg')} alt=""/>
                                        <div className="figcaption bg-dark">
                                            <h4>General Builder</h4>
                                            <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p>
                                            <NavLink to="/project-detail"><i className="link-plus bg-primary" /></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Specialization3;