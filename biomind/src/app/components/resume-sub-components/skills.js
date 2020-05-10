import React from 'react';

export default class Skills extends React.Component {
    render() {
        return ele;
    }
}

const ele = (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
            <h2 className="mb-5">Skills</h2>

            <div className="subheading mb-3">Libraries, Languages &amp; Frameworks</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item"> <i className="fab fa-html5"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-css3-alt"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-bootstrap"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-sass"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-js-square"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-angular"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-node-js"></i> </li>
            </ul>

            <div className="subheading mb-3">Repository, CLI & Tools</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item"> <i className="fab fa-github"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-npm"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-gitlab"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-bitbucket"></i> </li>
            </ul>

            <div className="subheading mb-3">Learning Stage</div>
            <ul className="list-inline dev-icons">
                <li className="list-inline-item"> <i className="fab fa-python"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-aws"></i> </li>
                <li className="list-inline-item"> <i className="fab fa-docker"></i> </li>
            </ul>

            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Understanding, Analysing and Planning the data and functional flow by Scrum calls.
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Deriving generic model for data flow and functional flow.
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Creating Factories, Services and Bussiness logics
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Setting up the Communication between the Front end and REST API.
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Unit Testing and Integration testing.
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Pushing the code Repos
                </li>
                <li>
                    <i className="fa-li fa fa-check"></i>
                    Updating the status in Board or WorkItem and EOD status in Scrum.
                </li>
            </ul>
        </div>
    </section>
);