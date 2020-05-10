import React from 'react';

export default class Education extends React.Component {
    render() {
        return ele;
    }
}

const ele = (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
            <h2 className="mb-5">Education</h2>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">Shree Venkateshwara Hi-Tech Engineering College.</h3>
                    <div className="subheading mb-3">Bachelor of Engineering</div>
                    <div>Computer Science Engineer</div>
                    <p>GPA: 7.7</p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">August 2010 - May 2014</span>
                </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">Saratha Higher Secondary School.</h3>
                    <div className="subheading mb-3">Higher Secondary</div>
                    <div>Computer Science</div>
                    <p>GPA: 8.4</p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">June 2009 - May 2010</span>
                </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                    <h3 className="mb-0">Diamond Jubilee Higher Secondary School.</h3>
                    <div className="subheading mb-3">Secondary School</div>
                    <p>GPA: 8.2</p>
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">June 2007 - May 2008</span>
                </div>
            </div>

        </div>
    </section>
);