import React from 'react';
import About from './resume-sub-components/about';
import Experience from './resume-sub-components/experience';
import Education from './resume-sub-components/education';
import Skills from './resume-sub-components/skills';
import Interests from './resume-sub-components/interests';

export default class ResumeWrapper extends React.Component {
    render() {
        return ele;
    }
}

const ele = (
    <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skills />
        <hr className="m-0" />
        <Interests />
    </div>
);