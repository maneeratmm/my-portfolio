import React, { Component } from 'react'
import Navitems from './Navitems'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }
    activeitem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({ 'NavItemActive':item}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }
    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home" tolink="/" activenav={this.activeitem} />
                    <Navitems item="About" tolink="/about" activenav={this.activeitem} />
                    <Navitems item="Education" tolink="/education" activenav={this.activeitem} />
                    <Navitems item="Skills" tolink="/skills" activenav={this.activeitem} />
                    <Navitems item="Experience" tolink="/experience" activenav={this.activeitem} />
                    <Navitems item="Certificate" tolink="/certificate" activenav={this.activeitem} />
                    <Navitems item="Contact" tolink="/contact" activenav={this.activeitem} />
                </ul>
            </nav>
        )
    }
}

export default Navbar