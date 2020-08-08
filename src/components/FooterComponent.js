import React from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-transition-group';

function Footer(props) {
    return(
       
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-12 col-md-8">
                        
                        <h5>Vinay Patel</h5>
                        <i className="fa fa-phone fa-lg"></i>: +437-488-2581<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:patelvinay9995@gmail.com">
                            patelvinay9995@gmail.com</a>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/vinaypatel9998/" target="_blank"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon" href="mailto:patelvinay9995@gmail.com"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">             
                    <div className="col-auto">
                        <p>© Copyright 2020 Weather Finder</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;