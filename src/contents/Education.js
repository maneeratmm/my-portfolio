import React, { Component } from 'react'
import Widecard from '../components/Widecard'

 class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Education</h1>
                <Widecard title="Computer Science" where="Khonkean university" from ="2009" to="2013" />
            </div>
        )
    }
}

export default Education
