import React from 'react';
import { Route, Link } from 'react-router-dom';

import Contact from '../src/components/Contact';
import Home from '../src/components/Home';

const Task01 = () => {
    const routes = [
        {url: '/task01/home', text: 'Home'},
        {url: '/task01/contact', text: 'Contact'},
    ]

    const nav = (
        <nav>
            <ul>
                { routes.map(item => <li key={item.url}><Link to={item.url}>{item.text}</Link></li>) }
            </ul>
        </nav>
    )

    return (
        <section>
            <h1>Task01</h1>
            {nav}
            <Route exact path={'/task01/home'}>
                <Home/>
            </Route>
            <Route exact path={'/task01/contact'}>
                <Contact/>
            </Route>
        </section>
    );
}

export default Task01;

