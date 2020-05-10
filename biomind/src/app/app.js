import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import './plugins/plugins';
import { Nav } from './components/nav';
import ResumeWrapper from './components/resume.wrapper';
import Tool from './components/tool'

export default class App extends React.Component {
    render() {
        return ele;
    }
}

const ele = (
    <div>
        <Nav />
        <Router>
            <Switch>
                <Route path="/tool">
                    <Tool />
                </Route>
                <Route path="/">
                    <ResumeWrapper />
                </Route>
            </Switch>
        </Router>
    </div>
);