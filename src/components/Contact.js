import React, { Component } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';



class Contact extends Component {

    componentDidMount() {
        Aos.init({ duration: 2000 });
    }

    render() {
        if (this.props.resumeBasicInfo && this.props.sharedContact) {
            var sectionName = this.props.resumeBasicInfo.section_name.contact
            var social = this.props.sharedContact.social.map(function (network) {
                return (
                    <span data-aos={network.fade} key={network.name} className="m-4">
                        <a href={network.url} target="_blank" className="social-refs" rel="noopener noreferrer">
                            <i className={network.class}></i>
                        </a>
                    </span>
                );
            });
        }

        return (
            <section  id="resume" className="pb-5">
                <div data-aos="fade-up" className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{ color: "black" }}>
                            <span style={{ textAlign: "center" }}>
                                {sectionName}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="social-links">{social}</div>
                </div>
            </section>
        );
    }
}


export default Contact;