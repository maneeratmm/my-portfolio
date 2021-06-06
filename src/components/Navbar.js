import React, { Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" />
                    <Navitems item="About" tolink="/about" />
                    <Navitems item="Education" tolink="/education" />
                    <Navitems item="Skills" tolink="/skills" />
                    <Navitems item="Experience" tolink="/experience" />
                    <Navitems item="Certificate" tolink="/certificate" />
                    <Navitems item="Contact" tolink="/contact" />
                </ul>
            </nav>
        )
    }
}

export default Navbar